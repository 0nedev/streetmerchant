import {Store} from './store';

export const CanadaComputersBulk: Store = {
  currency: '$',
  labels: {
    meta: {
      container: '#product-list',
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
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_3&mfr=&pr=',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557_559&sf=:3_4&mfr=&pr=',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_5&mfr=&pr=',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_7&mfr=&pr=',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_8&mfr=&pr=',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_9&mfr=&pr=',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url:
        'https://www.canadacomputers.com/search/results_details.php?language=en&keywords=5950x&cpath=4',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.canadacomputers.com/search/results_details.php?language=en&keywords=5900X&cpath=4',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://www.canadacomputers.com/search/results_details.php?language=en&keywords=5800X&cpath=4',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.canadacomputers.com/search/results_details.php?language=en&keywords=5600X&cpath=4',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557_558&sf=:3_29&mfr=&pr=',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557_558&sf=:3_30&mfr=&pr=',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557_558&sf=:3_31&mfr=&pr=',
    },
    {
      brand: 'amd',
      model: 'amd reference',
      series: 'rx6700xt',
      url:
        'https://www.canadacomputers.com/index.php?cPath=43_557&sf=:3_32&mfr=&pr=',
    },
  ],
  bulk: true,
  name: 'canadacomputers-bulk',
  waitUntil: 'domcontentloaded',
  //   requiresLogin: true,
  disableAdBlocker: true,
  useSameAgent: true,
};
