module.exports.paginaInicial = (req,res) =>
{
    res.send(`<h1>Bem vindo ao express amigao</h1>`);
}
module.exports.postInicial = (req,res) =>
{
    res.send(`<h1>Obrigado por me enviar isso dai, amigao</h1>`);
}