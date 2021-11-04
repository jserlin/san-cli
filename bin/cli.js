#!/usr/bin/env node
const program = require('commander')
// 定义当前版本
// 定义使用方法
// 定义四个指令
program
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command('add', '添加新模板')
  .command('delete', '删除模板')
  .command('list', '显示所有模板')
  .command('init', '根据模板生成一个新项目')

// 解析命令行参数
program.parse(process.argv)