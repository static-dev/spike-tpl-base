const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')<% if (sugar) { %>
const sugarml = require('sugarml')
const sugarss = require('sugarss')<% } %>
const env = process.env.NODE_ENV

module.exports = {
  devtool: 'source-map',<% if (sugar) { %>
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },<% } %>
  ignore: [<% if (sugar) { %>'**/layout.sgr'<% } else {%>'**/layout.html'<% } %>, '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({<% if (sugar) { %>
    parser: sugarml, <% } %>
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: cssStandards({<% if (sugar) { %>
    parser: sugarss, <% } %>
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards()
}
