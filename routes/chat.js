var express = require('express');
var router = express.Router();

/* GET users listing. */

module.exports = function (app) {
  router.post('/', app.controllers.chat.iniciaChat);
  router.get('/', app.controllers.chat.iniciaChat);
  app.use('/chat', router);
};
