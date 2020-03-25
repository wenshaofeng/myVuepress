# git 常用操作
## 基础操作

| 操作                    | 命令                                  |
| ----------------------- | ------------------------------------- |
| 初始化仓库              | `git init`                            |
| 克隆仓库                | `git clone <url>`                     |
| 检查本地文件状态        | `git status `                         |
| 将文件加入缓存区        | `git add <file>`                      |
| 忽略文件                | `echo <file> >> .gitignore `          |
| 提交更新                | `git commit`                          |
| 移除本地文件            | `rm <file>`<br>`git rm <file>`        |
| 移除缓存文件            | `git rm --cached <file>`              |
| 移动文件                | `git mv <file_from> <file_to>`        |
| 更改最后一次提交        | `git commit --amend`                  |
| 取消暂存文件            | `git reset HEAD <file>`               |
| 撤消对文件的修改        | `git checkout -- <file>`              |
| 查看远程仓库            | `git remote -v`                       |
| 添加远程仓库            | `git remote add <shortname> <url> `   |
| 从远程仓库中抓取与拉取  | `git fetch [remote-name]`             |
| 推送到远程仓库          | `git push [remote-name][branch-name]` |
| 远程仓库的移除          | `git remote rm <shortname>`           |
| 查看本地分支  /所有分支 | `git branch` `git branch all`         |
| 查看分支：              | `git branch `                         |
| 创建分支：              | `git branch <name>`                   |
| 切换分支：              | `git checkout <name>`                 |
| 创建+切换分支：         | `git checkout -b <name>`              |
| 合并某分支到当前分支：  | `git merge <name>`                    |
| 删除分支：              | `git branch -d <name>`                |



### 修改最后一次提交
```
$ git commit -m 'initial commit'
    $ git add forgotten_file
    $ git commit --amend
```
### 忽略文件权限
1. Git 会记录文件的权限信息；
2. 可以通过配置忽略文件权限；
3. 忽略文件权限配置，支持按照版本库和全局。

git 会记录文件的权限，如果两个地方的文件权限不一样，拉取或者合并的时候就很可能导致代码冲突问题

```shell
#当前版本库
git config core.filemode false
#全局
git config --global core.fileMode false
#查看
cat .git/config
```
在配置文件中，如果看到 `fileMode false` 则代表配置成功，如下图所示：