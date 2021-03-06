var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = module.exports = express();

api.use(logger('dev'));
api.use(bodyParser.json());

require('./books/routes')(api);
require('./colors/routes')(api);
require('./login/routes')(api);
require('./admin/routes')(api);
require('./markets/routes')(api);
require('./user/router')(api);
require('./marketForset/routes')(api);

module.exports = api;
