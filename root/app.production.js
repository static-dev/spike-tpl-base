const {UglifyJsPlugin} = require('webpack').optimize

module.exports = {
  devtool: false,
  plugins: [new UglifyJsPlugin()]
}
