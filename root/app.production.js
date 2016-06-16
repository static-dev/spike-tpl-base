const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const DedupePlugin = webpack.optimize.DedupePlugin
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin
const Util = require('spike-util')
const jade = require('posthtml-jade')
const minifyHtml = require('posthtml-minifier')
const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const cssnano = require('cssnano')
const lost = require('lost')

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
    loaders: { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'image-webpack' }
  },
  // adds html minification plugin
  posthtml: (ctx) => {
    const f = Util.filePathFromLoader(ctx).absolute
    return {
      defaults: [jade({ filename: f, pretty: true }), minifyHtml()]
    }
  },
  // adds css minification plugin
  postcss: (ctx) => {
    const atImport = postcssImport({ addDependencyTo: ctx })
    return {
      plugins: [atImport, cssnext(), rucksack(), lost(), cssnano()],
      parser: sugarss
    }
  }
}
