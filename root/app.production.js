const htmlStandards = require('spike-html-standards')
const Markdown = require('markdown-it')
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

const md = new Markdown(/* markdown-it config */)

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
    return htmlStandards({
      sugarml: true,
      webpack: ctx,
      locals: { foo: 'bar' },
      content: { md: md.renderInline.bind(md) },
      retext: smartypants
    })
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
