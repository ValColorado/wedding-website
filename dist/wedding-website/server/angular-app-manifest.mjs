
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z62P36VW.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4EF5ZNQP.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VY2UCR4S.js"
    ],
    "route": "/travel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PNN2AGMV.js"
    ],
    "route": "/things-to-do"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23744, hash: 'fc7fa33572bfc3f7c45c3e909a3101de6da828dcd4accbe39bb631792bbda333', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17318, hash: 'a8d4b53653d4682f5f4a3c83cf2ca8f17eda3b1881a153b090fc067edcfe1b32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29437, hash: '14b9c6a26b633f937ab2f20852de77587f001848e0b43c6599c443dedc8fb08c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 32255, hash: '735766a7db20564e7fd35f74a9747c48240824359ff911d89bc2126420f699fa', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'travel/index.html': {size: 28826, hash: '34e3ff1cfe644d859e621168df647e4e8fa567d2103ba6a1b1be1b23078eab4c', text: () => import('./assets-chunks/travel_index_html.mjs').then(m => m.default)},
    'things-to-do/index.html': {size: 29164, hash: '46dfbfabcb9434e3da344505ddc8385a4f99a19343e95cd9c1158ef9aa74db7b', text: () => import('./assets-chunks/things-to-do_index_html.mjs').then(m => m.default)},
    'styles-OBGJVZ66.css': {size: 7624, hash: 'yn71tOo5PTs', text: () => import('./assets-chunks/styles-OBGJVZ66_css.mjs').then(m => m.default)}
  },
};
