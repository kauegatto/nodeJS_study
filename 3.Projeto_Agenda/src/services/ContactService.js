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
        try{
            const contacts = await ContactSchema.find({owner});
            return contacts;

        }
        catch(e){
            console.log(e);
            return;
        }
    }
    async validateContact(userId,contactId){
        const contactInfo = await ContactSchema.findById(contactId);
        if (contactInfo.owner != userId){
            this.errors.push("This contact doesn't belong to your account");
            return null;
        }
        else {
            return contactInfo;
        }
    }
    async edit(userId, contactId, updatedInfo){
        const contactInfo = await ContactSchema.findById(contactId);
        if (contactInfo.owner != userId){
            this.errors.push("This contact doesn't belong to your account");
            return false;
        }
        else { //contact belongs to user
            try{
                const edited = await ContactSchema.findByIdAndUpdate(contactId,updatedInfo);
            }
            catch(e){
                this.errors.push("We're sorry, an unkown error occured");
                console.log(e);
            }
        }
    }
    async delete(userId,contactId){
        const contactInfo = await ContactSchema.findById(contactId);
        if (contactInfo.owner != userId){
            this.errors.push("This contact doesn't belong to your account");
            return false;
        }
        else { //contact belongs to user
            try{
                await ContactSchema.findByIdAndDelete(contactId);
            }
            catch(e){
                this.errors.push("We're sorry, an unkown error occured");
                console.log(e);
            }
        }
    }
}
module.exports = ContactService;