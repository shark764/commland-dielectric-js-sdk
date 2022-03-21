const { eslintBaseConfig } = require('@2600hz/commio-native-utilities');

const base = eslintBaseConfig(__dirname);
base.rules = {
  ...base.rules,
  '@typescript-eslint/no-var-requires': 'warn',
};

module.exports = base;
