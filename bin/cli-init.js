#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const tplMap = require(`${__dirname}/../template`)

program.usage('<template-name> [project-name]')
program.parse(process.argv)

// 没有输入参数的时候给个提示
if (program.args.length < 1) {
  return program.help()
}

// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[0]
let projectName = program.args[1]

if (!tplMap[templateName]) {
  console.log(chalk.red('\n 模板不存在! \n '))
  return
}
if (!projectName) {
  console.log(chalk.red('\n 项目名不能为空! \n '))
  return
}

const url = tplMap[templateName]
console.log(chalk.white('\n 开始... \n'))
const spinner = ora('下载中...');
spinner.start();

// download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch', 'test/tmp', { clone: true }, function (err) {
//   console.log(err ? 'Error' : 'Success')
// })

download (
  url,
  projectName,
  // 'test/tmp', 
  // { clone: true },
  err => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(`失败! ${err}`))
      return
    }

    spinner.succeed();
    console.log(chalk.green('\n 完成!'))
    console.log('\n 进入项目')
    console.log(`\n    cd ${projectName} \n`)
  }
)