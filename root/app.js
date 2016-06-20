const Util = require('spike-util')
const jade = require('posthtml-jade')
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
    html: '**/*.jade',
    css: '**/*.sss'
  },
  posthtml: (ctx) => {
    const f = Util.filePathFromLoader(ctx).absolute
    return {
      defaults: [jade({ filename: f, pretty: true })]
    }
  },
  postcss: (ctx) => {
    const atImport = postcssImport({ addDependencyTo: ctx })
    return {
      plugins: [atImport, cssnext(), rucksack(), lost()],
      parser: sugarss
    }
  },
  babel: { presets: [es2015, stage2] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
