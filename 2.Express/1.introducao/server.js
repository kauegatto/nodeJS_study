const express = require('express');
const app = express();
app.use(
    express.urlencoded({extended:true})
);
/*
http://www.meusite.com/{rota}/{parametro}?query=string&query=string
*/

app.get('/', (req,res)=>{
    res.send('Hello, world!!');
});

app.get('/user/:userId?', (req,res) => { // http://www.meusite.com/user/{opcional}
    res.send("<h3>"+req.params.userId+"</h3>");
});

app.get('/create',(req,res) => {
    res.send(req.query.nome);
    //http://localhost:3000/create?nome=kaue
});

app.post('/', (req,res)=>{//receber um post
    console.log(req.body); 
    res.send("obg amigo");
});

app.listen(3000, ()=> {
    console.log('Server executando na porta 3000 : http://localhost:3000');
});