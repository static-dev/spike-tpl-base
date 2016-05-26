const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')
const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')

module.exports = {
  postcss: {
    plugins: [cssnext, rucksack, lost],
    parser: sugarss
  },
  babel: { presets: [es2015, stage2] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
