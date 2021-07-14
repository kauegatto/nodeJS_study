module.exports.paginaInicial = (req,res) =>
{
    req.session.usuario = {nome:'vassao',sobrenome:'obrigado por me ajudar mano pprt',jwt:'sim'};
    res.render('index');
    return;
}
module.exports.postInicial = (req,res) =>
{
    res.send("valeu irmao");
    return;
}