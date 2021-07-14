const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const app = express();
const globalMiddleware = require('./src/middlewares/middleware.js');

app.set('views', path.resolve(__dirname, 'src','views')); //views
app.set('view engine','ejs'); //view engine (renderizar página)
 
app.use(
    express.urlencoded({extended:true}) //aceitar req body
);

app.use(express.static(path.resolve(__dirname,'public')));
app.use(globalMiddleware);//antes das rotas
app.use(routes); //


app.listen(3000, ()=> {
    console.log('Server executando na porta 3000 : http://localhost:3000');
});