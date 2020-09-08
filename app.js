var express = require('express');

var bootstrap = require("./api/v1/middlewares/bootstrap");
var error = require("./api/v1/middlewares/error");
var helper = require("./api/v1/helpers/server.helper");
var headers = require("./api/v1/middlewares/headers");
var indexRouter = require('./api/v1/routes/index');

var app = express();

bootstrap(app);
headers(app);

app.use('/', indexRouter);

error(app);

var port = helper.normalizePort(process.env.PORT || 5455);
app.set('port', port);

app.listen(port, function () {
	console.log("http server listening on : ", port);
});
app.on('error', helper.onError);
