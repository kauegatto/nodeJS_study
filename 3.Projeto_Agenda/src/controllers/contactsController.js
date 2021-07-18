const ContactService = require('../services/ContactService.js');
const Contact = new ContactService();
module.exports.index = async (req,res)=> {
    const userID = req.session.user.id; const contactID = req.params.contactID;
    if(contactID){ //if is passing an contact ID
        const contactInfo = await Contact.validateContact(userID,contactID);
        if(Contact.errors.length!=0){ //errors in fetching contact information (not authorized or others)
            req.flash('errors',Contact.errors);
            Contact.errors=[];
            res.redirect('../contact');
            return;
        }
        else{ //succesfully got the information
            res.render('contact',{contactInfo});
            return;
        }
    }
    else{
        res.render('contact',{contactInfo:null});
    }
}
module.exports.register = async (req,res) =>{
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
        return res.redirect('../contact');
        Contact.errors=[];
    }
    else{
        req.flash('success','Contact added!');
        return res.redirect('../contact');
    }
}
module.exports.edit = async (req,res)=> {
    const userID = req.session.user.id; const contactID = req.params.contactID;const updatedInfo=req.body;
    try{
        await Contact.edit(userID,contactID,updatedInfo);
    }
    catch(e){console.log(e);return;}
    if(Contact.errors.length!=0){
        req.flash('errors',contact.errors);
        Contact.errors = [];
    }
    else{
        req.flash('success', "Your contact was edited");
    }
    res.redirect(`../${contactID}`);
}
module.exports.delete = async (req,res)=> {
    const userID = req.session.user.id; const contactID = req.params.contactID;
    try{
        await Contact.delete(userID,contactID);
    }
    catch(e){console.log(e);return;}
    if(Contact.errors.length!=0){
        req.flash('errors',contact.errors);
        Contact.errors = [];
    }
    else{
        req.flash('success', "Your contact was deleted");
    }
    res.redirect("../");
}