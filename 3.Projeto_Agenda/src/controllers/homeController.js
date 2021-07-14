module.exports.paginaInicial = (req,res) =>
{
    req.session.usuario = {nome:'vassao',sobrenome:'obrigado por me ajudar mano pprt',jwt:'sim'};
    res.render('index',
    {
        titulo:'oi muito',
        dadosDiferentes:[0,1,2,3,4,5,6]
    });
    return;
}
exports.trataPost = (req, res) => {
    res.send(req.body);
};