### Git使用教程

---

#### 学习地址

> https://www.liaoxuefeng.com/wiki/896043488029600

Git是分布式服务器，而SVN是集中式服务器

1. **初始化身份**

```
git config --global user.name "Jocean"
git config --global user.email "1494449787@qq.com"
```

2. **创建仓库（版本库）**

初始化仓库
```
git init 
```

添加到仓库

```
git add 文件名
```

提交到仓库

```
git commit -m "注释"
```

3. **仓库操作（时光机穿梭）**

查看仓库状态 —— 有没有文件没有提交
```
git status
```

查看仓库状态 —— 查看具体改变内容

```
git diff
```

查看历史版本 —— 可以看到历史的版本号

```
git log
```

```
git log --pretty=online
```

回到历史版本 —— 有几个^就可以回到第几个版本

```
git reset --hard HEAD^
```

回到具体的版本

```
git reset --hard “版本号”
```

4. **工作区、暂存区**

add 只是将文件提交到了暂存区，commit 将暂存区的文件提交到存储区

5. **删除文件**

```
rm 文件
```

这个命令只是本地删除，在版本库中还没有删除

```
git checkout -- 文件
```

使用这个命令可以找回在本地删除的文件

---

```
git rm 文件
git commit -m "删除文件"
```

使用这个命令后才能进行彻底的版本库的删除

---

### 分支管理

相当于在原有的一个支路上复制了一份主干过来，然后进行编辑和编写

##### 创建与合并分支

```
git checkout -b dev
```

创建一个dev的分支，并且切换到相应的这个dev的分支上面

##### 查看分支

```
git branch
```

##### 创建分支

```
git branch <name>
```

##### 切换分支

```
git checkout <name>
```

##### 合并某分支到当前分支 —— 先从子分支切回主分支，在使用下面的命令

```
git merge <name>
```

##### 删除分支

```
git branch -d <name>
```

### 解决冲突

利用VScode 里面自带的功能能够很好的解决冲突

---

### Git关联Github

##### 生成ssh

```
ssh-keygen -t rsa -C "1494449787@qq.com"
```

##### 关联Github

在Github下找到“SSH and GPG keys”，将我们自己生成的密钥粘贴到”SSH keys”，就可以将自己的电脑和Github仓库进行关联

##### 新建仓库 new repository

不要勾选生成readme.md文件

##### 将本地仓库推送到远程仓库

在我们需要提交的代码中执行以下命令

```
git init
git add <filename>
git commit -m "注释（一定要写）"
git branch -M main
git remote add origin “仓库地址”
git push -u origin main
```



