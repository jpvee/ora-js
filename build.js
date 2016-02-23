({
  appDir: './',
  baseUrl: './src',
  dir: './dist',
  modules: [
    {
      name: 'main'
    }
  ],
  fileExclusionRegExp: /^(r|build)\.js$/,
  optimize: 'none',
  optimizeCss: 'standard',
  removeCombined: true,
  paths: {
  },
  shim: {
  }
})