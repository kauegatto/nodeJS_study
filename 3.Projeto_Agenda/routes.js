const express = require("express");
const routes = express.Router();
const homeController = require('./src/controllers/homeController.js');
const loginController = require('./src/controllers/loginController.js');

//rotas da index
routes.get('/', homeController.index);
//rotas de login
routes.get('/login', loginController.index);
routes.post('/login/login', loginController.login);
routes.post('/login/register', loginController.register);
module.exports = routes;