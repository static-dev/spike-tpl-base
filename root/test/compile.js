const test = require('ava')
const path = require('path')
const rimraf = require('rimraf')
const Spike = require('spike-core')

const p = path.join(__dirname, '..')

test.cb.before((t) => {
  rimraf(path.join(p, 'public'), () => { t.end() })
})

test('compiles project with spike', (t) => {
  const project = new Spike({ root: p })
  return new Promise((resolve, reject) => {
    project.on('error', reject)
    project.on('warning', reject)
    project.on('compile', resolve)
    project.compile()
  })
})
