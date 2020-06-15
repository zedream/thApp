module.exports = {
  publicPath:'./',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://172.16.3.223:3000',
        ws: true,
				autoRewrite: true,
				changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
