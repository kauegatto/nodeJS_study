const HomeModel = require('../models/HomeModel.js'); 

HomeModel.create({
    nome:'bruno',
    descricao:'simm sou o bruno!'
})
    .then(dados => console.log(dados))
    .catch( e=> console.log(e))

module.exports.paginaInicial = (req,res) =>
{
    res.render('index');
}
module.exports.postInicial = (req,res) =>
{
    res.send("valeu por enviar aqui, mano!");
    return;//opcional
}