const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/app', {
    target: 'https://test.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/app": "/app"
    }
  }))
}
