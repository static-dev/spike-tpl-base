const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')

module.exports = {
  postcss: {
    plugins: [cssnext, rucksack, lost],
    parser: sugarss
  },
  babel: { presets: ['es2015', 'stage-2'] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
