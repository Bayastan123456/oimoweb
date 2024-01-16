const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // Adjust the path as needed
    createProxyMiddleware({
      target: 'https://oimo-web.netlify.app',
      changeOrigin: true,
    })
  );
};
