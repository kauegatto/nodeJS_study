const express = require("express");
const routes = express.Router();
const homeController = require('./controllers/homeController.js');
const userController = require('./controllers/userController.js');

/*
http://www.meusite.com/{rota}/{parametro}?query=string&query=string
*/

routes.get('/', homeController.paginaInicial);

routes.get('/user/:userId?', userController.userInfo);

routes.post('/', homeController.postInicial);

module.exports = routes;