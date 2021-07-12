require('dotenv').config();

const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        app.emit('ready');
    })
    .catch((e) => console.log("erro: "+ e)); 

const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const sessionOptions = session({
    secret: 'supersecret123',
    store: new mongoStore({mongooseConnection: moongose.connection}),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly:true
    }
});

//const globalMiddleware = require('./src/middlewares/middleware.js');
//app.use(globalMiddleware);

app.use(sessionOptions);
app.use(flash());

app.use(
    express.urlencoded({extended:true}) //aceitar req body
);

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname, 'src','views')); //views

app.set('view engine','ejs'); //view engine (renderizar página)
 

app.use(routes); 

app.on('ready', () =>
{
    app.listen(3000, () => {
        console.log('Server executando na porta 3000 : http://localhost:3000');
    })
});
