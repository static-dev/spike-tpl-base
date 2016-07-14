const sugarml = require('sugarml')
const expressions = require('posthtml-exp')
const content = require('posthtml-content')
const extend = require('posthtml-extend')
const include = require('posthtml-include')
const md = require('markdown-it')
const retext = require('posthtml-retext')
const smartypants = require('retext-smartypants')
const minifyHtml = require('posthtml-minifier')

const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const lost = require('lost')
const cssnano = require('cssnano')

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
      parser: sugarml,
      plugins: [
        expressions({ locals: { foo: 'bar' } }),
        content({ md: md.renderInline.bind(md) }),
        extend({ root: ctx.resourcePath }),
        include({ root: ctx.resourcePath, addDependencyTo: ctx }),
        retext([smartypants]),
        minifyHtml({ collapseWhitespace: true, removeComments: true })
      ]
    }
  },
  // adds css minification plugin
  postcss: (ctx) => {
    return {
      parser: sugarss,
      plugins: [
        postcssImport({ addDependencyTo: ctx }),
        cssnext({ warnForDuplicates: false }),
        rucksack(),
        lost(),
        cssnano()
      ]
    }
  }
}
