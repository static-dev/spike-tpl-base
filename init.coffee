exports.configure = [
  {
    name: 'name'
    message: 'What is the name of your project?'
  },
  {
    name: 'description'
    message: 'Describe your project'
  },
  {
    name: 'github_username'
    message: 'What is your github username?'
  }
]

exports.before = (utils) ->
  # before hook

exports.beforeRender = (utils, config) ->
  # before_render hook

exports.after = (utils, config) ->
  # after hook
