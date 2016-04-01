import path from 'path'
import test from 'ava'
import Sprout from 'sprout'
import Roots from 'roots-mini'
import rimraf from 'rimraf-promise'
import tmpdir from 'os-tmpdir'
import W from 'when'
import node from 'when/node'
import {exec} from 'child_process'

const tplTestPath = path.join(__dirname, 'example')

test.cb.before((t) => {
  rimraf(tplTestPath, () => { t.end() })
})

test('initializes with sprout, compiles with roots', t => {
  const tplName = 'roots-mini-base-test'
  const locals = { name: 'doge', description: 'wow', github_username: 'amaze' }
  const sprout = new Sprout(tmpdir())

  t.plan(1)

  return sprout.add(tplName, path.resolve(__dirname, '..'))
    .tap(() => console.log('initializing template...'))
    .then(sprout.init.bind(sprout, tplName, tplTestPath, { locals: locals }))
    .tap(() => console.log('installing dependencies...'))
    .then(npmInstall.bind(null, tplTestPath))
    .tap(() => console.log('compiling with roots...'))
    .then(() => {
      return W.promise((resolve, reject) => {
        const project = new Roots({ root: tplTestPath })
        project.on('error', reject)
        project.on('compile', resolve)
        project.compile()
      })
    })
    .then(() => { t.is(true, true) })
    .finally(() => {
      return rimraf(tplTestPath).then(sprout.remove.bind(sprout, tplName))
    })
})

function npmInstall (dir) {
  return node.call(exec, 'npm install', { cwd: dir })
}
