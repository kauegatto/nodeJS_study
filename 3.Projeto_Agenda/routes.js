const express = require("express");
const routes = express.Router();
const homeController = require('./src/controllers/homeController.js');
const authController = require('./src/controllers/authController.js');
const contactsController = require('./src/controllers/contactsController.js');

const {checkLogin} = require('./src/middlewares/middleware.js');


//rotas da index
routes.get('/', checkLogin, homeController.index);

//rotas de login
routes.get('/login', authController.index);
routes.get('/login/logout', authController.logout);
routes.post('/login/login', authController.login);
routes.post('/login/register', authController.register);
routes.get('/login/logOut', authController.register);

//rotas de contato
routes.get('/contacts',checkLogin, contactsController.index);
routes.post('/contacts/register',checkLogin, contactsController.register);

module.exports = routes;