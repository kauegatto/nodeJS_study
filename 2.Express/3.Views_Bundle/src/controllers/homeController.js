module.exports.paginaInicial = (req,res) =>
{
    res.render('index');
}
module.exports.postInicial = (req,res) =>
{

    res.send("valeu por enviar aqui, mano!");
}