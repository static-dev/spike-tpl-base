const htmlStandards = require('spike-html-standards')
const Markdown = require('markdown-it')
const smartypants = require('retext-smartypants')
const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')

const md = new Markdown(/* markdown-it config */)

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sml',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sml', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      sugarml: true,
      webpack: ctx,
      locals: { foo: 'bar' },
      content: { md: md.renderInline.bind(md) },
      retext: smartypants
    })
  },
  postcss: (ctx) => {
    return {
      parser: sugarss,
      plugins: [
        postcssImport({ addDependencyTo: ctx }),
        cssnext(),
        rucksack()
      ]
    }
  },
  babel: { presets: [es2015, stage2] }
}
