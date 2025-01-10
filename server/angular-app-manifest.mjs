
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  assets: {
    'index.csr.html': {size: 764, hash: '4b0f5ce446c0db41357a80165b574cc158338acb4997dba1f2867fce15b3587c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1281, hash: 'cf93f0ff802a24983d054a1c0f76c9b77ee28080d76da122d646fff5b49f7be6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8125, hash: 'dc1912657a823fb9c918232908e3d1be4082704a52a5dca52efb9365086b0ca2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
