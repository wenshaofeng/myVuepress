## Git存储原理

### Git 对象

- Git 从核心上来看不过是简单地存储键值对（key-value）
- 通过SHA-1算法生成hash

#### blob

- 单个文件

#### tree

- 类unix文件系统

- 一个单独的 tree 对象包含一条或多条 tree 记录

- 每一条记录含有一个指向 blob 或子 tree 对象的 SHA-1 指针

  ![](https://git-scm.com/figures/18333fig0902-tn.png)

#### commit

- 指向一个tree的SHA-1

- 指定了之前commit的SHA-1

- 包含一些commit信息

  ![](https://git-scm.com/figures/18333fig0903-tn.png)

#### tag

- 指向commit的SHA-1
- annotated tag

#### reference

- 指向commit的SHA-1

- 没有实体，在`.git/ref`中更新

- 分支及轻量级tag

  ![](https://git-scm.com/figures/18333fig0904-tn.png)

#### HEAD 标记

- 指向某一个reference

  ```
  $ cat .git/HEAD
  ref: refs/heads/test
  ```

