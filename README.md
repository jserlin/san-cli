#### 说明
> git模板仓库管理cli，用于管理模板跟生成新项目

#### 使用
- 安装 
  - npm install san-template-cli -g
  - 或者下载项目后 执行npm link
- 查看是否安装成功
  - san-cli 会在控制台显示命令
- 查看当前所有模板项目 
  - san-list 
- 添加模板仓库 
  - san-add
  - 根据提示输入模板名跟仓库地址
- 使用模板创建项目
  - san-init 模板名 项目名


#### 使用到的依赖包
- commander.js，可以自动的解析命令和参数，用于处理用户输入的命令。
- download-git-repo，下载并提取 git 仓库，用于下载项目模板。
- inquirer.js，通用的命令行用户界面集合，用于和用户进行交互。
- ora，下载过程久的话，可以用于显示下载中的动画效果。
- chalk，可以给终端的字体加上颜色。

#### git模板 链接配置
  [download-git-repo文档](https://www.npmjs.com/package/download-git-repo)

