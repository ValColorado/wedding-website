
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-VM5WM2Y7.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFN7BPXW.js"
    ],
    "route": "/faq"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23670, hash: 'a98547ccbd59498b36aa0a13ca5fcc6b593b35cd91b2731109447836510c6316', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17244, hash: '503694c3f1c9f8f030601576ef101814436500a6acabd7f448ee4bb7e18b7e32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30011, hash: '2268f926eeb41d3799755cc8f425b86eaef1c5979445746070c33b9886e6d14c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 23991, hash: '4e80992ec4e3ef4268ccc65713e733a9b91deba57e647b6b037920be88b33ba1', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
