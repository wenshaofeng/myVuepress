# git 分支
- 分支其实就是从某个提交对象往回看的历史

![](https://git-scm.com/figures/18333fig0309-tn.png)

## 分支创建

```console
$ git branch testing
```

![](https://git-scm.com/book/en/v2/images/head-to-master.png)

创建了一个分支的指针

## 分支切换

```con
$ git checkout testing
```



![](https://git-scm.com/book/en/v2/images/head-to-testing.png)



## 分支合并 `git merge`

#### fast-forward

仅移动分支指针

**前**

![](https://git-scm.com/book/en/v2/images/basic-branching-4.png)

```console
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```

**后**

![](https://git-scm.com/book/en/v2/images/basic-branching-5.png)



#### 合并

**前**

![](https://git-scm.com/book/en/v2/images/basic-merging-1.png)

```console
$ git checkout master
Switched to branch 'master'
$ git merge iss53
Merge made by the 'recursive' strategy.
index.html |    1 +
1 file changed, 1 insertion(+)
```

**后**

![](https://git-scm.com/book/en/v2/images/basic-merging-2.png)



- Git 会使用两个分支的末端所指的快照（`C4` 和 `C5`）以及这两个分支的工作祖先（`C2`），做一个简单的三方合并

- Git 会自行决定选取哪一个提交作为最优的共同祖先，并以此作为合并的基础

#### 遇到冲突

```console
$ git merge iss53
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

- 自行解决冲突
- 推荐使用Jetbrain全家桶内置的git工具

## 分支变基`git rebase`

另一种合并分支的方法是 `git rebase`。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。

Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

回到两个分支最近的共同祖先，根据当前分支后续的历次提交对象，生成一系列文件补丁，然后以基底分支最后一个提交对象为新的出发点，逐个应用之前准备好的补丁文件，最后会生成一个新的合并提交对象，从而改写 提交历史。

**前**



![](https://git-scm.com/figures/18333fig0327-tn.png)



```
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```



**后**

![](https://git-scm.com/figures/18333fig0329-tn.png)

`git rebase`命令合并代码之后，版本记录会将目标分支的版本放在后面，然后再将当前分支的版本记录放在前边。

#### gif 动画



还是准备了两个分支；注意当前所在的分支是 bugFix（星号标识的是当前分支）

我们想要把 bugFix 分支里的工作直接移到 master 分支上。移动以后会使得两个分支的功能看起来像是按顺序开发，但实际上它们是并行开发的。

执行`git rebase master`

![](./img/git_rebase.gif)

现在 bugFix 分支上的工作在 master 的最顶端，同时我们也得到了一个更线性的提交序列。

注意，提交记录 C3 依然存在（树上那个半透明的节点），而 C3' 是我们 Rebase 到 master 分支上的 C3 的副本。

我们切换到了 master 上。把它 rebase 到 bugFix 分支上……
执行`git rebase bugFix`

![](./img/git_rebase2.gif)
由于 bugFix 继承自 master，所以 Git 只是简单的把 master 分支的引用向前移动了一下而已。
#### 风险

- 变基会更改分支的commit路径
- 禁止对远程分支进行变基

## 交互式变基 （rebase）

当你知道你所需要的提交记录（**并且**还知道这些提交记录的哈希值）时, 用 cherry-pick 再好不过了 —— 没有比这更简单的方式了。

但是如果你不清楚你想要的提交记录的哈希值呢? 幸好 Git 帮你想到了这一点, 我们可以利用交互式的 rebase —— 如果你想从一系列的提交记录中找到想要的记录, 这就是最好的方法了

交互式 rebase 指的是使用带参数 `--interactive` 的 rebase 命令, 简写为 `-i`，即 `git rebase -i`

如果你在命令后增加了这个选项, Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。

在实际使用时，所谓的 UI 窗口一般会在文本编辑器 —— 如 Vim —— 中打开一个文件。 考虑到课程的初衷，我弄了一个对话框来模拟这些操作。

当 rebase UI界面打开时, 你能做3件事:

- 调整提交记录的顺序（通过鼠标拖放来完成）
- 删除你不想要的提交（通过切换 `pick` 的状态来完成，关闭就意味着你不想要这个提交记录）
- 合并提交。简而言之，它允许你把多个提交记录合并成一个。

## git cherry-pick(遴选)



有时候需要把另一个分支中的某个版本单独复制到当前分支中，如果直接使用`git merge`或者`git rebase`进行合并的话，会把另一个分支所有的版本记录都合并过来，这显然不是我们所需要的。

Git 当中提供了一个功能，它可以将另外一个分支中的某个版本单独复制到当前的分支中来，这就是我们这节要学的`git cherry-pick`命令。



- 选择另一个分支的commit在本分支重放
- 重放单个commit
  - `git cherry-pick <commit-id>`
- 重放多个commit
  - `git cherry-pick <commit-id-from> <commit-id-to>`

## 远程分支

- 用 `<remote>/<branch>` 这样的形式表示远程分支
-  使用`fetch` 操作下载新的远程分支
- 远程分支是一个无法移动的 `<remote>/<branch>` 引用。
- 使用`git merge <remote>/<branch>`合并远程分支
- 从远程分支 `checkout` 出来的本地分支，称为 *跟踪分支* (tracking branch)
- 可以直接使用`push/pull`来操作跟踪分支

- 删除远程分支：`git push <remote> :<branch>`

## 分支提交历史

使用`git log`用于查看分支提交历史

| 选项                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| `-p`                | 按补丁格式显示每个更新之间的差异。                           |
| `--word-diff`       | 按 word diff 格式显示差异。                                  |
| `--stat`            | 显示每次更新的文件修改统计信息。                             |
| `--shortstat`       | 只显示 --stat 中最后的行数修改添加移除统计。                 |
| `--name-only`       | 仅在提交信息后显示已修改的文件清单。                         |
| `--name-status`     | 显示新增、修改、删除的文件清单。                             |
| `--abbrev-commit`   | 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。            |
| `--relative-date`   | 使用较短的相对时间显示（比如，“2 weeks ago”）。              |
| `--graph`           | 显示 ASCII 图形表示的分支合并历史。                          |
| `--pretty`          | 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。 |
| `--oneline`         | `--pretty=oneline --abbrev-commit` 的简化用法。              |
| `-(n)`              | 仅显示最近的 n 条提交                                        |
| `--since, --after`  | 仅显示指定时间之后的提交。                                   |
| `--until, --before` | 仅显示指定时间之前的提交。                                   |
| `--author`          | 仅显示指定作者相关的提交。                                   |

## git reset,checkout

#### git reset

- 用来修改提交历史的

- 丢弃掉一些版本历史

  - 不丢弃使用revert，创建一个新的commit
  - 已经push到远程仓库的commit不允许reset

- 参数：`--soft`, `--mixed`, `--hard`

  - 改变HEAD所指向的commit(`--soft`)

  - 执行第1步，将Staging区域更新为HEAD所指向的commit里包含的内容(`--mixed`)
  - 执行第1、2步，将Working Directory区域更新为HEAD所指向的commit里包含的内容(`--hard`)

- 带文件参数的reset

  - HEAD不会动

  - 将那个commit的snapshot里的那个文件放到Index区域中

#### git checkout

- 只改变HEAD指针
  - 将HEAD指向那个分支的最后一次commit
  - 将HEAD指向的commit里所有文件的snapshot替换掉Stage区域里原来的内容
  - 将Stage区域里的内容填充到Working Directory里

- 和`reset --hard`相比

  - reset会把working directory里的所有内容都更新掉

  - checkout不会去修改你在Working Directory里修改过的文件

  - reset把branch移动到HEAD指向的地方

  - checkout则可以HEAD移动到另一个分支

- 带文件参数

  - 更新了staging区域里file文件的内容

  - 更新了working directory里file文件的内容

#### 对比

```
                         head    index   work dir  wd safe
Commit Level
reset --soft [commit]    REF     NO      NO        YES
reset [commit]           REF     YES     NO        YES
reset --hard [commit]    REF     YES     YES       NO
checkout [commit]        HEAD    YES     YES       YES

File Level
reset (commit) [file]    NO      YES     NO        YES
checkout (commit) [file] NO      YES     YES       NO
```



“head”一列中的“REF”表示该命令移动了HEAD指向的分支引用，而“HEAD”则表示只移动了HEAD自身。 特别注意 “wd safe?” 一列，YES表示不会懂你在work dir的修改，NO代表会动你在work dir的修改。

## 分支管理

- master分支

  发布分支，完全稳定的代码，即已经发布或即将发布的代码

- dev分支

  开发分支，或仅用于稳定性测试 — 当然并不是说一定要绝对稳定，不过一旦进入某种稳定状态，便可以把它合并到 `master` 里

  - 如果mater分支与dev分支没有分叉，可以直接fast-forward
  - 如果mater分支与dev分支分叉，可以选择merge或者cherry-pick

- 特性分支

  工作分支，开发完成后可合并进`dev`分支



 ![img](https://git-scm.com/figures/18333fig0319-tn.png)




## 常见的团队工作模型

#### 最简单的基本模型 （集中式工作流）

1. git clone 一份远程仓库的代码
2. 完成自己的部分后，git add + git commit 后，git push
3. 如果有冲突，先 git pull 拉取远端最新的代码，在git push

#### 功能分支工作流

1. git clone 一份远程仓库的代码
2. 任何新的功能（feature）或 bug 修复全都新建一个 branch 来写；
3. 将新的功能分支推送到远程仓库
4. 审核、通过了以后合并到 develop 或者 release 分支，让测试测试，通过后合并至master，并删除功能分支
5. 也可以使用 GitHub 的 `pull request` 将新分支推送之远端，在GitHub上确认是否合并至 master 分支

#### GitFlow工作流
![](https://upload-images.jianshu.io/upload_images/9249356-65a0d2a8cb2f46f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Fork工作流