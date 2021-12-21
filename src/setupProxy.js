const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  // app.use(createProxyMiddleware('/app', {
  //   target: 'https://test.com',
  //   secure: false,
  //   changeOrigin: true,
  //   pathRewrite: {
  //     "^/app": "/app"
  //   }
  // }))
  app.use(createProxyMiddleware('/sys', {
    target: 'http://calo.lzmsj.cn',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/sys": "/sys"
    }
  }))
}
