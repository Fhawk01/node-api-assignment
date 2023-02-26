var express = require('express');
var router = express.Router();
const weatherController = require('../controllers/weatherController.js');

router.get('/', function (req, res, next) {
  weatherController.weather_list(req, res);
});

module.exports = router;
