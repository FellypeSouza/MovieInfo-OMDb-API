
export default {
  basePath: 'https://FellypeSouza.github.io/MovieInfo-OMDb-API',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
