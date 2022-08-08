const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'http://localhost:'+(process.env.PORT || 3100),
            changeOrigin: true,
        })
    );
};