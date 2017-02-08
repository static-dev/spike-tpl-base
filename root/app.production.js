const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const pageId = require('spike-page-id')
const {UglifyJsPlugin, DedupePlugin} = require('webpack').optimize

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [
    new UglifyJsPlugin(),
    new DedupePlugin()
  ],
  // image optimization
  module: {
    rules: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{ loader: 'image-webpack' }]
    }]
  },
  // adds html minification plugin
  // TODO separate the minify plugins, add here manually, don't repeat standards
  reshape: htmlStandards({
    webpack: true,
    locals: (ctx) => { return { pageId: pageId(ctx) } },
    minify: true
  }),
  // adds css minification plugin
  postcss: cssStandards({
    webpack: true,
    minify: true,
    warnForDuplicates: false // cssnano includes autoprefixer
  })
}
