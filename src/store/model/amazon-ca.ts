import {Store} from './store';

export const AmazonCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-color-price',
    },
    outOfStock: {
      container: '.a-color-price',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B07PBLD2MX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.ca/dp/B07PBLD2MX',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWN2LZG',
      associateLink: 'https://amzn.to/3kYMYCc',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWLMZV4',
      associateLink: 'https://amzn.to/38mDr2s',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08LW46GH2',
      associateLink: 'https://amzn.to/3kUIfBp',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L71SM',
      associateLink: 'https://amzn.to/2PKz2jA',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L9TCZ',
      associateLink: 'https://amzn.to/3chxSDC',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR7SV3M',
      associateLink: 'https://amzn.to/3buN2Xb',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR5SXPS',
      associateLink: 'https://amzn.to/2OhF2zL',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3DPGW',
      associateLink: 'https://amzn.to/30qkFCY',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3Y5GQ',
      associateLink: 'https://amzn.to/38m3C9C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR55YB5',
      associateLink: 'https://amzn.to/3v5VpQD',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR4RJ3Q',
      associateLink: 'https://amzn.to/3ekMe8Z',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR6FMF3',
      associateLink: 'https://amzn.to/2Ohqpwi',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJTH61J',
      associateLink: 'https://amzn.to/3v7DBEz',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJS2JLJ',
      associateLink: 'https://amzn.to/3ehYWW5',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HHDP9DW',
      associateLink: 'https://amzn.to/38E11Ir',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HH5WF97',
      associateLink: 'https://amzn.to/3buOHfo',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJNKT3P',
      associateLink: 'https://amzn.to/30p02ah',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJQ182D',
      associateLink: 'https://amzn.to/3rtdhTr',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HR9D2JS',
      associateLink: 'https://amzn.to/38oIyPT',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJRF2CN',
      associateLink: 'https://amzn.to/38jUHoY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJPDJTY',
      associateLink: 'https://amzn.to/3t2hCNK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJGNJ81',
      associateLink: 'https://amzn.to/3qoCEEB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJLLF7G',
      associateLink: 'https://amzn.to/3btTbml',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.ca/dp/B08166SLDF',
      associateLink: 'https://amzn.to/3t1NBgZ',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.ca/dp/B0815XFSGK',
      associateLink: 'https://amzn.to/38E2hv9',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.ca/dp/B08164VTWH',
      associateLink: 'https://amzn.to/3kXQmNF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.ca/dp/B0815Y8J9N',
      associateLink: 'https://amzn.to/3bxjCrv',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GSC5D9G&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.ca/dp/B08GSC5D9G',
      associateLink: 'https://amzn.to/3l8TWoh',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GS1N24H&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.ca/dp/B08GS1N24H',
      associateLink: 'https://amzn.to/3emDa3h',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08H75RTZ8&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.ca/dp/B08H75RTZ8',
      associateLink: 'https://amzn.to/38lrhHf',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08G9J44ZN&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.ca/dp/B08G9J44ZN',
      associateLink: 'https://amzn.to/2MWEVsK',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08NX14LV1',
      associateLink: 'https://amzn.to/3qxPmk9',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08PQ585CX',
      associateLink: 'https://amzn.to/2OACoVO',
    },
  ],
  name: 'amazon-ca',
};
