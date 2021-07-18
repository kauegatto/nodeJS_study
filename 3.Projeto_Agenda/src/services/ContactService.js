const validator = require('validator');
const ContactSchema = require('../db/ContactSchema.js');

class ContactService {
    constructor(){
        this.errors = [];
    }
    async register(nickname,email,phoneNumber,owner){
        if(nickname==null || nickname==""){
            this.errors.push("You can't let the nickname field empty");
        }
        if(owner==null || owner==""){
            this.errors.push("Error");
            return;
        }
        if(email==null && phoneNumber==null){
            this.errors.push("You need to fill at least one field on email and phone number");
            return;
        }
        if(!validator.isEmail(email)){
            this.errors.push('Invalid Email');
            return;
        }
        if(this.errors.length!=0){
            return;
        }
        try{
            await ContactSchema.create({nickname,email,phoneNumber,owner});
        }
        catch(e){
            console.log(e);
        }

    }
    async findContacts(owner){
        const contacts = await ContactSchema.find({owner});
        return contacts;
    }
    delete(){

    }
    cleanUp(){

    }
}
module.exports = ContactService;