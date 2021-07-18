const ContactService = require('../services/ContactService.js');
const Contact = new ContactService();
module.exports.index = (req,res)=> {
    res.render('addContact');
}
module.exports.register = async function (req,res) {
    const {nickname, email, phoneNumber} = req.body;
    try{
        await Contact.register(nickname,email,phoneNumber,req.session.user.id);
    }
    catch(e){
        console.log(e);
        res.render('404');
        return;
    }
    if (Contact.errors.length !=0){
        console.log("contact wasn't created:");
        console.log(nickname,email,phoneNumber,"id:"+req.session.user.id);
        console.log(Contact.errors);
        req.flash('errors',Contact.errors);
        return res.redirect('../contacts');
        Contact.errors=[];
    }
    else{
        req.flash('success','Contact added!');
        return res.redirect('../contacts');
    }
}