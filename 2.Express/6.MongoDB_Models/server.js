require('dotenv').config();

const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log("deve ter conectado né");
        app.emit('ready');
    })
    .catch((e) => console.log("erro: "+ e)); 

const globalMiddleware = require('./src/middlewares/middleware.js');

app.set('views', path.resolve(__dirname, 'src','views')); //views
app.set('view engine','ejs'); //view engine (renderizar página)
 
app.use(
    express.urlencoded({extended:true}) //aceitar req body
);

app.use(express.static(path.resolve(__dirname,'public')));
app.use(globalMiddleware);
app.use(routes); 

app.on('ready', () =>
{
    app.listen(3000, () => {
        console.log('Server executando na porta 3000 : http://localhost:3000');
    })
});
