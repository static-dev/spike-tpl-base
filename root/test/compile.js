import test from 'ava'
import path from 'path'
import rimraf from 'rimraf'
import Roots from 'roots-mini'

const p = path.join(__dirname, '..')

test.cb.before((t) => {
  rimraf(path.join(p, 'public'), () => { t.end() })
})

test('compiles project with roots-mini', (t) => {
  return new Promise((resolve, reject) => {
    const project = new Roots({ root: p })
    project.on('error', reject)
    project.on('compile', resolve)
    project.compile()
  })
})
