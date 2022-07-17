const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const webpack = require('webpack')
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: [
    "vuetify"
  ],
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return {}
    return {
      performance: {
        hints: false,
      },
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/'],
          minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            sortClassName: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
          },
          renderer: new Renderer({
            headless: true,
            renderAfterDocumentEvent: 'render-event',
          })
        })
      ]
    }
  },
}