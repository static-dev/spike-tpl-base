const sugarml = require('sugarml')
const expressions = require('posthtml-exp')
const content = require('posthtml-content')
const extend = require('posthtml-extend')
const include = require('posthtml-include')
const md = require('markdown-it')
const retext = require('posthtml-retext')
const smartypants = require('retext-smartypants')

const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const lost = require('lost')

const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sml',
    css: '**/*.sss'
  },
  ignore: ['**/layout.jade', '**/_*', '**/.*'],
  posthtml: (ctx) => {
    return {
      parser: sugarml,
      plugins: [
        expressions({ locals: { foo: 'bar' } }),
        content({ md: md.renderInline.bind(md) }),
        extend({ root: ctx.resourcePath }),
        include({ root: ctx.resourcePath, addDependencyTo: ctx }),
        retext([smartypants])
      ]
    }
  },
  postcss: (ctx) => {
    return {
      parser: sugarss,
      plugins: [
        postcssImport({ addDependencyTo: ctx }),
        cssnext(),
        rucksack(),
        lost()
      ]
    }
  },
  babel: { presets: [es2015, stage2] }
}
