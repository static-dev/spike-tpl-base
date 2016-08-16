const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const es2016 = require('babel-preset-es2016')

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sml',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sml', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      webpack: ctx,
      locals: { foo: 'bar' }
    })
  },
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [es2016] }
}
