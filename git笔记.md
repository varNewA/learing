# Git指令
#### Git基本指令
**创建git库**
```
git init
```

**添加文件到Git仓库**
```
git add <file>
git commit -m <message>
```
**显示工作区状态**
```
git status
```
**可查看文件修改内容（通过status得知）**
```
git diff
```
**查看提交历史（可用于回退前查看）**
```
git log
```
**版本回退**
```
git reset --hard commit_id
```
**重返未来**
```
git reflog
```

* * *

**工作区与版本库**
![701e02bf0b2d71ab51b7e2b6aa973d52.jpeg](en-resource://database/690:1)

* * *
**切换至另一个分支（例：切换到dev分支）**
```
git checkout <dev>
```

**直接丢弃工作区的修改**
```
git checkout -- file
```

**不但改乱了工作区某个文件的内容，还添加到了暂存区时**
```
git reset HEAD <file>
```
```
git checkout -- file
```

**删除一个文件**
```
git rm
```

* * *
#### 远程仓库

**关联一个远程库**
```
git remote add <远程库名字> <github的SSH>
```
**第一次推送master分支的所有内容**
```
git push -u <远程库名字> master
```

此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；


**克隆一个仓库**
```
git clone <github的SSH>
```
[git gui 教程(连接远程库前，需先克隆)](%3Ca href="https://jingyan.baidu.com/article/19020a0a7ae6af529c284248.html"%3Ehttps://jingyan.baidu.com/article/19020a0a7ae6af529c284248.html%3C/a%3E)

* * *
#### 分支管理

查看分支：`git branch`
创建分支：`git branch <name>`
切换分支：`git checkout <name>`
创建+切换分支：`git checkout -b <name>`
合并某分支到当前分支：`git merge <name>`
删除分支：`git branch -d <name>`
用`git log --graph`命令可以看到分支合并图。

**BUG修复**

修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场。

* * *

每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

* * *
**多人合作**

* 查看远程库信息，使用`git remote -v`；
* 本地新建的分支如果不推送到远程，对其他人就是不可见的；
* 从本地推送分支，使用`git push origin <branch-name>`，如果推送失败，先用`git pull`抓取远程的新提交；
* 在本地创建和远程分支对应的分支，使用`git checkout -b <branch-name> <远程库名字>/<branch-name>`，本地和远程分支的名称最好一致；
* 建立本地分支和远程分支的关联，使用`git branch --set-upstream<branch-name> <远程库名字></branch-name>`；
* 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

**Rebase**
rebase操作可以把本地未push的分叉提交历史整理成直线；
rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

* * *
#### 标签管理

**新建一个标签，默认为`HEAD`，也可以指定一个commit id；**
```
git tag <tagname>
```
**指定标签信息**
```
git tag -a <tagname> -m "blablabla..."
```
**查看所有标签**
```
git tag
```
* * *

**推送一个本地标签**
```
git push origin <tagname>
```
**推送全部未推送过的本地标签**
```
git push origin --tags
```
**删除一个本地标签**
```
git tag -d <tagname>
```
**删除一个远程标签**
```
git push origin :refs/tags/<tagname>
```