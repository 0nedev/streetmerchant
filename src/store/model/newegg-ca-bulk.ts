import {Store} from './store';

export const NewEggCaBulk: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    meta: {
      container: '.row-body-inner',
      type: 'outerHTML',
    },
  },
  links: [
    {
      // brand and model are irrelevant for bulk processing
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url:
        'https://www.newegg.ca/p/pl?d=3090&N=100006663%20601357282%208000&PageSize=96',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url:
        'https://www.newegg.ca/p/pl?d=3080&N=100007708%208000%20601385735&isdeptsrh=1',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url:
        'https://www.newegg.ca/p/pl?d=3080&N=100007708%208000%20601357247&isdeptsrh=1',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url:
        'https://www.newegg.ca/p/pl?d=3070&N=100007708%20601357282%208000&isdeptsrh=1',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url:
        'https://www.newegg.ca/p/pl?d=3060&N=100007708%20601359415%208000&isdeptsrh=1',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060',
      url:
        'https://www.newegg.ca/p/pl?d=3060&N=100007708%208000%20601361654&isdeptsrh=1',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.newegg.ca/p/pl?d=5950x&N=100006677%204841',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.newegg.ca/p/pl?d=5900X&N=100007670%20601359163%208000&isdeptsrh=1',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.newegg.ca/p/pl?d=5800X&N=100007670%20600213784%208000',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.newegg.ca/p/pl?d=5600X&N=100006677%208000%204841',
    },
    // COMBO DEALS
    {
      brand: 'amd',
      model: '5600x',
      series: 'misc',
      url:
        'https://www.newegg.ca/p/pl?N=8000%204812%20100007708&PageSize=96&isdeptsrh=1',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.ca/p/pl?d=6900&N=100007708%20601359511%208000',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.ca/p/pl?d=6800&N=100006663%208000%20601359422',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.ca/p/pl?d=6800&N=100006663%208000%20601359427',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6700xt',
      url:
        'https://www.newegg.ca/p/pl?d=6700+xt&N=8000%20100007708%20601359511&isdeptsrh=1',
    },
  ],
  bulk: true,
  name: 'newegg-ca-bulk',
  waitUntil: 'domcontentloaded',
};
