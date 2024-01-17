const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '../db.json',  // путь к вашему ресурсу
    createProxyMiddleware({
      target: 'https://oimo-web.netlify.app',
      changeOrigin: true,
    })
  );
};