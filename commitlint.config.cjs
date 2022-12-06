module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'update',
        'chore',
        'build',
        'docs',
        'ci',
        'style',
        'perf',
        'refactor',
        'test',
        'revert',
      ]
    ]
  }
}

