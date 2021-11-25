const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/news',
		createProxyMiddleware({
			target: '*',
			changeOrigin: true,
		})
	);
};

//  "proxy": "https://covid-19-wordnews-api.herokuapp.com",
