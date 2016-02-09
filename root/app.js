import autoprefixer from 'autoprefixer'
import precss from 'precss'

export default {
  postCssPlugins: [autoprefixer, precss],
  babelConfig: { presets: ['es2015-node5', 'stage-0'] },
  locals: { foo: 'bar' },
  ignore: [/layout\.jade/]
}
