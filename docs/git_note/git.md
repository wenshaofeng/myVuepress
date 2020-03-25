# Git分享

## Git概览

- 分布式版本控制
- 记录所有文件，而非快照
- 本地仓库用于版本控制
- 远程仓库用于同步及协作
- 多数操作为添加数据
- 丰富的分支管理功能

## Git基础

### 文件的三种状态



![](https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2391503317,2295283142&fm=26&gp=0.jpg)



#### Working directory

- 工作目录
- 通过checkout从本地仓库提取
- 可直接修改

#### Staging area

- 缓存区域
- 通过git add/remove来修改

#### Repository

- 本地仓库
- 通过commit提交版本
- 通过reset/merge进行变更

### 远程仓库

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536601302768&di=417275dc1b9909932edb8b62c21638e4&imgtype=0&src=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fwupeiqi%2F662608%2Fo_git.png)

- 通过push推送版本至远程仓库
- 通过fetch拉去版本至本地仓库
- pull = fetch + merge

### 基础操作

| 操作                   | 命令                                  |
| ---------------------- | ------------------------------------- |
| 初始化仓库             | `git init`                            |
| 克隆仓库               | `git clone <url>`                     |
| 检查本地文件状态       | `git status `                         |
| 将文件加入缓存区       | `git add <file>`                      |
| 忽略文件               | `echo <file> >> .gitignore `          |
| 提交更新               | `git commit`                          |
| 移除本地文件           | `rm <file>`<br>`git rm <file>`        |
| 移除缓存文件           | `git rm --cached <file>`              |
| 移动文件               | `git mv <file_from> <file_to>`        |
| 更改提交               | `git commit --amend`                  |
| 取消暂存文件           | `git reset HEAD <file>`               |
| 撤消对文件的修改       | `git checkout -- <file>`              |
| 查看远程仓库           | `git remote -v`                       |
| 添加远程仓库           | `git remote add <shortname> <url> `   |
| 从远程仓库中抓取与拉取 | `git fetch [remote-name]`             |
| 推送到远程仓库         | `git push [remote-name][branch-name]` |
| 远程仓库的移除         | `git remote rm <shortname>`           |




## Git标签

Git 可以给历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）

### 列出标签

```console
$git tag
v0.1
v1.3
```

### 标签类型

- 轻量标签（lightweight）

  - 一个轻量标签很像一个不会改变的分支 - 它只是一个特定提交的引用

  - 创建  - `git tag <version> <commit>` 

- 附注标签（annotated）

  - 附注标签是存储在 Git 数据库中的一个完整对象。
  -  它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息
  - 可以使用 GNU Privacy Guard （GPG）签名与验证。 
  - 创建 - `git tag -a <version> <commit> -m <comment>`

### 创建标签

- 轻量标签（lightweight）

### 共享标签

默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样 - 你可以运行 `git push origin [tagname]`

### 检出标签

在 Git 中你并不能真的检出一个标签，因为它们并不能像分支一样来回移动。 如果你想要工作目录与仓库中特定的标签版本完全一样，可以使用 `git checkout -b [branchname] [tagname]` 在特定的标签上创建一个新分支