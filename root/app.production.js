const jade = require('posthtml-jade')
const md = require('posthtml-md')
const retext = require('posthtml-retext')
const smartypants = require('retext-smartypants')
const minifyHtml = require('posthtml-minifier')
const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const cssnano = require('cssnano')
const lost = require('lost')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const DedupePlugin = webpack.optimize.DedupePlugin
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [
    new UglifyJsPlugin(),
    new DedupePlugin(),
    new OccurrenceOrderPlugin()
  ],
  // image optimization
  module: {
    loaders: [{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'image-webpack' }]
  },
  // adds html minification plugin
  posthtml: (ctx) => {
    return {
      defaults: [
        jade({ filename: ctx.resourcePath, pretty: true, foo: 'bar' }),
        md(),
        retext([smartypants]),
        minifyHtml({ collapseWhitespace: true, removeComments: true })
      ]
    }
  },
  // adds css minification plugin
  postcss: (ctx) => {
    const atImport = postcssImport({ addDependencyTo: ctx })
    return {
      plugins: [atImport, cssnext({ warnForDuplicates: false }), rucksack(), lost(), cssnano()],
      parser: sugarss
    }
  }
}
