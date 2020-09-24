module.exports = {
  extends: '@snowpack/app-scripts-react/babel.config.json',
  presets: [],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
        libraryDirectory: 'es',
      },
      'antd',
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign',
  ],
};
