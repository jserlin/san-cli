#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

// 读取根目录下的template.json
const tplMap = require(`${__dirname}/../template`)

// 自定义交互式命令行的问题及校验
const question = [
  {
    name: 'name',
    type: 'input',
    message: '请输入模板名称',
    validate (val) {
      if (val === '') {
        return '模板名称必填字段!'
      } else if (tplMap[val]) {
        return '该模板名已存在!'
      } else {
        return true
      }
    }
    },
      {
      name: 'url',
      type: 'input',
      message: '请输入模板地址',
      validate (val) {
        if (!val) {
          return '模板地址必填字段'
        }
        return true
      }
    }
]

inquirer.prompt(question).then(answers => {
    // answers 用户输入的内容，是个对象
    let { name, url } = answers;
    // 过滤 unicode 字符
    tplMap[name] = url.replace(/[\u0000-\u0019]/g, '')
    // 把模板信息写入 template.json 文件中
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(tplMap), 'utf-8', err => {
      if (err) console.log(err)
      console.log('\n')
      console.log(chalk.green('添加成功!\n'))
      console.log(chalk.grey('模板列表: \n'))
      console.log(tplMap)
      console.log('\n')
    })
 })