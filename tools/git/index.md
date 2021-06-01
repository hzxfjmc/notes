# git常用命令介绍

# Navigator

* [放弃某次merge](#放弃某次merge)

* [在非目的分支做了修改，想切换回目的的分支](#在非目的分支做了修改，想切换回目的的分支)

* [git忽略不提交文件](#git忽略不提交文件)

* [提交分支代码](#提交分支代码)

* [分支代码操作常见命令](#分支代码操作常见命令)

* [window下git命令缩写](#window下git命令缩写)



## 放弃某次merge
假如你merge的时候产生了很大的冲突，想先放弃某次的merge，可以执行以下的命令中的一个

    1.git merge --abort  
    2.git reset HEAD  
    3.git checkout HEAD  

## 在非目的分支做了修改，想切换回目的的分支
* 还未添加到暂存区/已添加到暂存区还未提交  

    1.新建临时分支，get checkout -b new_branch,这样改动会被带到新分支。然后把非目的的分支的修改用git checkout .恢复。

    2.先git stash,然后切换到目的分支（git checkout [target-branch]）,在目的分支git stash pop即可。这种方式最好理解，就是把改动先放到一个临时区域，让git先别管，到了正确的分支再拿出来。

* 已提交到本地仓库
这种情况就要reset了，用git reset HEAD^撤销最近一次的提交，如果有多次提交的话，查找到对应提交id进行reset就行。git默认的是mixed模式，即撤销暂存区，保留工作区。这样你再切分支也还能把改动带过去。当然加--soft也可以，这样能保留暂存区和工作区。  

* 已push到远程仓库。如果很不幸你已经把误修改给push了，你需要用到revert命令，先用git log查找你误提交的commitId，然后git revert commitId,产生一次逆向提交，来对冲之前的。之后再push到远程就可以了

## git忽略不提交文件
* 从未提交过的文件

这种最简单，直接把想忽略的文件加入.gitignore中忽略提交即可

* 已经推送（push）过的文件

已经推送（push）过的文件，想要删掉本地文件，并将删除这个操作更新到远程文件

``` javascript

    git rm -r cached .
    git add .
    git commit -m "feat:update .gitignore"
    git push -u origin master

```

已经推送（push）过的文件，想从git远程库中删除，并在以后的提交中忽略，但是却还想在本地保留这个文件，可以使用

``` javascript

    $git rm --cached page/index.html

```

已经推送（push）过的文件，想在以后的提交时忽略此文件（即便本地对该文件修改过也不同提交新修改），并且不删除git远程库中相应文件，可以使用

``` javascript

    $git update-index --assume-unchanged page/index.html

```

如果要忽略的是一个目录，则打开git bash, cd 到目标目录下

``` javascript

    $git update-index --assume-unchange $(git ls-files | tr '\n' ' ')

```

## 提交分支代码
* 在当前分支下，第一次push

``` javascript

    git push --set-upstream origin [branch]

```
这样设置一次之后，后面直接git push即可

* 不在当前分支的情况下

``` javascript

    git push origin feat:feat

```

## 分支代码操作常见命令
* 列出所有的本地分支

``` javascript

    git branch

```

* 列出所有的远程分支

``` javascript

    git branch -r
    
```

* 列出所有的本地分支和远程分支

``` javascript

    git branch -a
    
```

* 新建一个分支，但依然停留在当前分支

``` javascript

    git branch [branch-name]
    
```

* 新建一个分支，并切换到该分支

``` javascript

    git checkout -b [branch-name]
    
```

* 新建一个分支，与指定的远程分支建立追踪关系

``` javascript

    git branch --track [branch] [remote-branch]
    
```

* 切换到指定分支，并更新工作区

``` javascript

    git checkout [branch-name]
    
```

* 切换到上一个分支

``` javascript

    git checkout -
    
```

* 合并指定分支到当前分支

``` javascript

    git merge [branch-name]
    
```

* 删除分支

``` javascript

    // 删除合并过的分支
    git branch -d [branch-name]
    // 删除未合并的分支
    git branch -D [branch-name]
    
```

* 删除远程分支

``` javascript

    git push origin --delete [branch-name]
    git branch -dr [remote/branch]
    
```

* 拉取所有的分支代码

``` javascript

    git featch
    
```


## window下git命令缩写

1.新建~/.bashrc文件

2.编辑文档

    alias ga = 'git add'

    alias gaa = 'git add --all'

    alias gp = 'git push'

3.保存并source ~/.bashrc即可




