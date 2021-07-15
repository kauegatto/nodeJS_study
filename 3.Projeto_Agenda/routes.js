const express = require("express");
const routes = express.Router();
const homeController = require('./src/controllers/homeController.js');
const authController = require('./src/controllers/authController.js');

//rotas da index
routes.get('/', homeController.index);
//rotas de login
routes.get('/login', authController.index);
routes.post('/login/login', authController.login);
routes.post('/login/register', authController.register);
module.exports = routes;