module.exports = {
  extends: '@snowpack/app-scripts-react',
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-webpack',
    'snowpack-plugin-less',
    ['snowpack-plugin-url-loader'],
  ],
  devOptions: {
    bundle: false,
  },
  buildOptions: {
    baseUrl: '/',
  },
};
