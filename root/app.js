import autoprefixer from 'autoprefixer'
import precss from 'precss'
import rucksack from 'rucksack-css'

export default {
  postCssPlugins: [autoprefixer, precss, rucksack],
  babelConfig: { presets: ['es2015', 'stage-2'] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*']
}
