const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

const jsreportPackages = fs.readdirSync('extensions')

for (const pd of jsreportPackages) {
  execSync('npm i --production', {
    cwd: path.join('extensions', pd)
  })
}
