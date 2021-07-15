const AuthService = require('../services/AuthService.js');
module.exports.index = (req,res) => {
    if(!req.session.user){
        res.render('login');
    }
    else{
        req.flash('success','You are already logged in');
        res.redirect('/')
    }
};
module.exports.login = async function (req,res) {
    try{
        const Auth = new AuthService(req.body);
        await Auth.login();
        if(Auth.errors.length > 0){ //deu errado (no input do user)
            req.flash('errors',Auth.errors);
            req.session.save(function(){
                return res.redirect('../login');
            })
            return;
        } 
        req.flash('success','You logged in'); //deu certo
        req.session.user = {id:Auth.user.id,email:Auth.user.email};
        req.session.save(function(){
            return res.redirect('../');
        })
    }
    catch(e){ //deu erro de execução
        console.log(e);
    }
};
module.exports.register = async function (req,res) {
    try{
        const Auth = new AuthService(req.body);

        await Auth.register();

        if(Auth.errors.length > 0){
            req.flash('errors',Auth.errors);
            req.session.user = {id:Auth.user.id,email:Auth.user.email};
            req.session.save(function(){
                return res.redirect('../login');
            })
            return;
        } 
        
        req.flash('success','User created successfully');
        req.session.save(function(){
            return res.redirect('../');
        })
    }
    catch(e){
        res.render('404.ejs');
        console.log(e);
    }
};
module.exports.logout = async function (req,res) {
    req.session.destroy();
    res.redirect('/login');
};