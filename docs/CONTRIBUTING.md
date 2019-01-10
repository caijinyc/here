# 参与贡献

有任何疑问，欢迎提交 [issue](https://github.com/caijinyc/Here/issues/new)， 或者直接修改提交 PR!

## 提交 issue

- 请确定 issue 的类型。
- 请避免提交重复的 issue，在提交之前搜索现有的 issue。
- 在标题或者内容中体现明确的意图。

## 提交代码

### 提交 Pull Request

如果你希望一起开发项目，那么随时欢迎你创建分支修改代码并提交代码。

```js
# 先创建开发分支开发，分支名应该有含义
$ git checkout -b branch-name

# 开发完成后，提交代码，message 见下面的规范
$ git add .
$ git commit -m "fix(role): role.use must xxx"
$ git push origin branch-name
```

### Commit 提交规范

根据 [Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) 提交 commit，这样 history 看起来更加清晰。

简单一点就是：`<type>: <subject>`。

**type**:

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

**subject**:

用一句话清楚的描述这次提交做了什么。

例如：

```shell
$ git commit -m "feat: 添加 xxx 功能"
```

