const sugarml = require('sugarml')
const expressions = require('reshape-expressions')
const content = require('reshape-content')
const layouts = require('reshape-layouts')
const include = require('reshape-include')
const Markdown = require('markdown-it')
const retext = require('reshape-retext')
const smartypants = require('retext-smartypants')

const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
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
  // TODO add html minification plugin
  reshape: (ctx) => {
    const md = new Markdown(/* markdown-it plugins here */)
    return {
      parser: sugarml,
      locals: { foo: 'bar' },
      filename: ctx.resourcePath,
      plugins: [
        expressions(),
        content({ md: md.renderInline.bind(md) }),
        layouts({ addDependencyTo: ctx }),
        include({ addDependencyTo: ctx }),
        retext(smartypants)
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
        cssnano()
      ]
    }
  }
}
