# Gitָ��
#### Git����ָ��
**����git��**
```
git init
```

**����ļ���Git�ֿ�**
```
git add <file>
git commit -m <message>
```
**��ʾ������״̬**
```
git status
```
**�ɲ鿴�ļ��޸����ݣ�ͨ��status��֪��**
```
git diff
```
**�鿴�ύ��ʷ�������ڻ���ǰ�鿴��**
```
git log
```
**�汾����**
```
git reset --hard commit_id
```
**�ط�δ��**
```
git reflog
```

* * *

**��������汾��**
![701e02bf0b2d71ab51b7e2b6aa973d52.jpeg](en-resource://database/690:1)

* * *
**�л�����һ����֧�������л���dev��֧��**
```
git checkout <dev>
```

**ֱ�Ӷ������������޸�**
```
git checkout -- file
```

**���������˹�����ĳ���ļ������ݣ�����ӵ����ݴ���ʱ**
```
git reset HEAD <file>
```
```
git checkout -- file
```

**ɾ��һ���ļ�**
```
git rm
```

* * *
#### Զ�ֿ̲�

**����һ��Զ�̿�**
```
git remote add <Զ�̿�����> <github��SSH>
```
**��һ������master��֧����������**
```
git push -u <Զ�̿�����> master
```

�˺�ÿ�α����ύ��ֻҪ�б�Ҫ���Ϳ���ʹ������`git push origin master`���������޸ģ�


**��¡һ���ֿ�**
```
git clone <github��SSH>
```
[git gui �̳�(����Զ�̿�ǰ�����ȿ�¡)](%3Ca href="https://jingyan.baidu.com/article/19020a0a7ae6af529c284248.html"%3Ehttps://jingyan.baidu.com/article/19020a0a7ae6af529c284248.html%3C/a%3E)

* * *
#### ��֧����

�鿴��֧��`git branch`
������֧��`git branch <name>`
�л���֧��`git checkout <name>`
����+�л���֧��`git checkout -b <name>`
�ϲ�ĳ��֧����ǰ��֧��`git merge <name>`
ɾ����֧��`git branch -d <name>`
��`git log --graph`������Կ�����֧�ϲ�ͼ��

**BUG�޸�**

�޸�bugʱ�����ǻ�ͨ�������µ�bug��֧�����޸���Ȼ��ϲ������ɾ��������ͷ����û�����ʱ���Ȱѹ����ֳ�`git stash`һ�£�Ȼ��ȥ�޸�bug���޸�����`git stash pop`���ص������ֳ���

* * *

ÿ���һ���¹��ܣ�����½�һ��feature��֧�������濪������ɺ󣬺ϲ������ɾ����feature��֧��

���Ҫ����һ��û�б��ϲ����ķ�֧������ͨ��`git branch -D <name>`ǿ��ɾ����

* * *
**���˺���**

* �鿴Զ�̿���Ϣ��ʹ��`git remote -v`��
* �����½��ķ�֧��������͵�Զ�̣��������˾��ǲ��ɼ��ģ�
* �ӱ������ͷ�֧��ʹ��`git push origin <branch-name>`���������ʧ�ܣ�����`git pull`ץȡԶ�̵����ύ��
* �ڱ��ش�����Զ�̷�֧��Ӧ�ķ�֧��ʹ��`git checkout -b <branch-name> <Զ�̿�����>/<branch-name>`�����غ�Զ�̷�֧���������һ�£�
* �������ط�֧��Զ�̷�֧�Ĺ�����ʹ��`git branch --set-upstream<branch-name> <Զ�̿�����></branch-name>`��
* ��Զ��ץȡ��֧��ʹ��`git pull`������г�ͻ��Ҫ�ȴ����ͻ��

**Rebase**
rebase�������԰ѱ���δpush�ķֲ��ύ��ʷ�����ֱ�ߣ�
rebase��Ŀ����ʹ�������ڲ鿴��ʷ�ύ�ı仯ʱ�����ף���Ϊ�ֲ���ύ��Ҫ�����Աȡ�

* * *
#### ��ǩ����

**�½�һ����ǩ��Ĭ��Ϊ`HEAD`��Ҳ����ָ��һ��commit id��**
```
git tag <tagname>
```
**ָ����ǩ��Ϣ**
```
git tag -a <tagname> -m "blablabla..."
```
**�鿴���б�ǩ**
```
git tag
```
* * *

**����һ�����ر�ǩ**
```
git push origin <tagname>
```
**����ȫ��δ���͹��ı��ر�ǩ**
```
git push origin --tags
```
**ɾ��һ�����ر�ǩ**
```
git tag -d <tagname>
```
**ɾ��һ��Զ�̱�ǩ**
```
git push origin :refs/tags/<tagname>
```