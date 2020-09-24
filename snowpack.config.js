module.exports = {
  extends: '@snowpack/app-scripts-react',
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-webpack', 'snowpack-plugin-less'],
  devOptions: {
    bundle: false,
  },
  buildOptions: {
    baseUrl: '/',
  },
};
