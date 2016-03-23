import cssnext from 'postcss-cssnext'
import rucksack from 'rucksack-css'

export default {
  postcss: {
    plugins: [cssnext, rucksack]
  },
  babelConfig: { presets: ['es2015', 'stage-2'] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*']
}
