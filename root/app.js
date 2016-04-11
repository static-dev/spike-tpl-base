import cssnext from 'postcss-cssnext'
import rucksack from 'rucksack-css'
import sugarss from 'sugarss'
import lost from 'lost'

export default {
  postcss: {
    plugins: [cssnext, rucksack, lost],
    parser: sugarss
  },
  babelConfig: { presets: ['es2015', 'stage-2'] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
