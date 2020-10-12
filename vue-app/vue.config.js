module.exports = {
  publicPath:'./',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: {
      '/': {
        //本地服务接口地址
        target: 'http://127.0.0.1:3003',
        ws: true,
        autoRewrite: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/'
        // }
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'THao'
        return args
      })
  },
}
