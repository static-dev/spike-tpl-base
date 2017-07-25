exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'github_username',
    message: 'What is your github username?'
  }, {
    name: 'sugar',
    message: 'Would you like to use whitespace-sensitive syntax?',
    type: 'confirm',
    default: false
  }, {
    name: 'production',
    message: 'Would you like a production config file?',
    type: 'confirm',
    default: true
  }
]

exports.after = (util, config) => {
  if (!config.production) util.target.remove('app.production.js')

  if (config.sugar) {
    util.target.remove('views/index.html')
    util.target.remove('views/layout.html')
    util.target.remove('assets/css/_global.css')
    util.target.remove('assets/css/index.css')
  } else {
    util.target.remove('views/index.sgr')
    util.target.remove('views/layout.sgr')
    util.target.remove('assets/css/_global.sss')
    util.target.remove('assets/css/index.sss')
  }
}
