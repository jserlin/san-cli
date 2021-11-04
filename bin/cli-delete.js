#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const tplMap = require(`${__dirname}/../template`)

let question = [
  {
    name: 'name',
    message: '请输入要删除的模板名称',
    validate (val) {
      if (val === '') {
        return '模板名称必填字段!'
      } else if (!tplMap[val]) {
        return '模板不存在!'
      } else  {
        return true
      }
    }
  }
]

inquirer
  .prompt(question).then(answers => {
    // answers 就是用户输入的内容
    let { name } = answers;
    delete tplMap[name]
    // 更新 template.json 文件
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(tplMap), 'utf-8', err => {
      if (err) console.log(err)
      console.log('\n')
      console.log(chalk.green('删除成功\n'))
      console.log(chalk.grey('模板列表: \n'))
      console.log(tplMap)
      console.log('\n')
    })
  })