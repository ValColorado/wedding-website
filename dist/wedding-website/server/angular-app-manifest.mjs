
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-AIFAI4NP.js"
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
    'index.csr.html': {size: 23744, hash: '35346e3ef7853cc0a1dbd565a6dfaf9a9b9c1c08dd4c7c943830231d91dbee7d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17318, hash: 'dc0fa9d44c10fbff40f8a826e410b24cee6e4c2bbffd7567211a39b05a02c973', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30172, hash: '64208a15af5f307a7fdd37d4bd8db6f392911b3549cc41f2bf31bb7da386ad6d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'things-to-do/index.html': {size: 29125, hash: 'dd3cefa2e356aa6616b640821da401492218f25b35ff4c486a3f48f5d1e8cfc8', text: () => import('./assets-chunks/things-to-do_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 32216, hash: 'aa61ea55866c628356c2fdb4371ba69d19d9cfc22a53169a702d4e73c98ac241', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'travel/index.html': {size: 28787, hash: '518aa7103895df2b8b97bae1d3459fe2b9adcbd75ec45603048bdc12d2580602', text: () => import('./assets-chunks/travel_index_html.mjs').then(m => m.default)},
    'styles-KUREOIK2.css': {size: 7585, hash: '+brlDQuusds', text: () => import('./assets-chunks/styles-KUREOIK2_css.mjs').then(m => m.default)}
  },
};
