const Login = require('../models/LoginModel.js');
module.exports.index = (req,res) => {
    res.render('login');
};
module.exports.login = (req,res) => {

};
module.exports.register = async function (req,res) {
    try{
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0){
            req.flash('errors',login.errors);
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