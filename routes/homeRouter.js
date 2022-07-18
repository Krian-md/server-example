var express = require('express');
var routerHome = express.Router();

var homeController = require('../controllers/homeController.js');


routerHome.get('/', homeController.index);

routerHome.get('/about', homeController.about);

module.exports = routerHome;