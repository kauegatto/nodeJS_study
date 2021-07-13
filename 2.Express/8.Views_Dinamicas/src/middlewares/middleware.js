module.exports = (req,res,next) =>{
    res.locals.response = 'test value'; //isso fica só nessa rota(que é tudo pq é um middleware sem rota específica)
    next();
}