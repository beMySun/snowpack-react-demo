module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {
    'mount:public': 'mount public --to /',
    'mount:src': 'mount src --to /_dist_',
    'run:lint': "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    'run:lint::watch': 'watch "$1" src',
    'build:css': 'postcss',
    'build:js,jsx,ts,tsx': 'snowpack-plugin-import-map',
    'bundle:*': '@snowpack/plugin-react-refresh',
    'bundle:*': '@snowpack/plugin-webpack',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-webpack',
    ['snowpack-plugin-import-map', {}],
  ],
  devOptions: {
    bundle: false,
  },
  buildOptions: {
    baseUrl: '/',
  },
};
