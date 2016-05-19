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
    name: 'hosting',
    message: 'Do you want to set-up hosting now? (via netlify)',
    type: 'confirm',
    default: false
  }
]

exports.after = function(utils, config) {
  if (config.hosting) {
    console.log()
    console.log('to complete hosting...')
    console.log('- cd into your new project')
    console.log('- npm install')
    console.log('- create a new github repository & add origin')
    console.log('- run `npm run netlify`')
    console.log()
  }
}
