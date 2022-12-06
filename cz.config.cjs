module.exports = {
  types: [
    { value: 'feat', name: '新增：新增功能、页面' },
    { value: 'fix', name: 'bug：修复某个bug' },
    { value: 'update', name: '更新：普通更新' },
    { value: 'chore', name: '其他修改：增加依赖库、工具、除了ci、build相关的第三方插件的配置更新等' },
    { value: 'build', name: '打包编译：编译打包相关修改，例如发布版本、对项目构建或外部依赖的改动（例如修改vite、webpack等配置）' },
    { value: 'docs', name: '文档：修改增加文档、注释' },
    { value: 'ci', name: '自动化构建：更改持续集成软件的配置文件和package.json中的scripts命令，如配置修改husky、commitlint等' },
    { value: 'style', name: '格式：不影响代码运行的变动、空格、格式化等等' },
    { value: 'perf', name: '优化：提升性能、用户体验等' },
    { value: 'refactor', name: '重构：代码重构，未新增任何功能和修复任何bug' },
    { value: 'test', name: '测试：包括单元测试、集成测试' },
    { value: 'revert', name: '回滚：代码回退到某个版本节点' },
  ],

  messages: {
    type: '请选择提交类型(必填):',
    scope: '请选择一个scope (可选):',
    customScope: '请输入文件修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述，使用"|"换行(可选):\n',
    breaking: '列出任务非兼容性说明 (可选):\n',
    footer: '请输入要关闭的issue，例如：#12, #34(可选):\n',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  skipQuestions: ['scope', 'customScope', 'body', 'breaking'],
  // 设置选择了那些type，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix', 'update', 'chore', 'build', 'ci'],
  subjectLimit: 100
}