FROM node:15.11.0-alpine3.13 AS builder

LABEL org.opencontainers.image.source="https://github.com/jef/streetmerchant"

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm ci

COPY src/ src/
RUN npm run compile
RUN npm prune --production

FROM node:15.12.0-alpine3.13

RUN apk add --no-cache chromium

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
  DOCKER=true

RUN addgroup -S appuser && adduser -S -g appuser appuser \
  && mkdir -p /home/appuser/Downloads /app \
  && chown -R appuser:appuser /home/appuser \
  && chown -R appuser:appuser /app

RUN apk add --no-cache tmux
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install tmuxp
ENV LANG=en_CA.UTF-8

# USER appuser

WORKDIR /app

COPY --from=builder /build/node_modules/ node_modules/
COPY --from=builder /build/build/ build/
COPY web/ web/
COPY package.json package.json

# These are conditional, we'll copy only if they exist, wildcard helps us do that
COPY dotenv* /app/
COPY streetmerchant.yaml* /app/
COPY *.proxies /app/

ENTRYPOINT ["/bin/sh", "-c", "tmuxp load streetmerchant.yaml"]
# CMD "tmuxp load streetmerchant.yaml"