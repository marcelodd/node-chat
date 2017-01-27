var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (app) {
  router.get('/',app.controllers.index.home);

  app.use('/', router);
};
