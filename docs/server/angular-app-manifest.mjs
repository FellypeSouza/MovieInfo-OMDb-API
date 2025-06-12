
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://FellypeSouza.github.io/MovieInfo-OMDb-API/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MovieInfo-OMDb-API"
  },
  {
    "renderMode": 2,
    "route": "/MovieInfo-OMDb-API/contentpage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5047, hash: '971bebbaf9280c7e77cb3a12f07461d97efef27a6fa331592bbed57a4017f20f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5334, hash: 'df4047a9be015d57584458963474e938960098e415a36a5ac2ab0cd12f37fe6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24516, hash: 'aac89328457caa3c0add3841fe98b11dc2b92c54ed41f975ce81aefa39254600', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contentpage/index.html': {size: 11856, hash: '19c135b17f6d6bfa839af4654391110551932128b9d499079448f338dd441f62', text: () => import('./assets-chunks/contentpage_index_html.mjs').then(m => m.default)},
    'styles-W4YLBS6Q.css': {size: 124, hash: 'nmAz7pwVhPw', text: () => import('./assets-chunks/styles-W4YLBS6Q_css.mjs').then(m => m.default)}
  },
};
