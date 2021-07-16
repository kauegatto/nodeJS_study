const mongoose = require('mongoose');
const Contact = require('../models/ContactModel.js');

const ContactSchema = new mongoose.Schema({ 
    nickname: {type: String, required: true},
    email: {type: String, required:false,default:''},
    phoneNumber: {type: String, required:false, default:''},
    owner: {type: String, required: true}
});
ContactSchema.loadClass(Contact);

const ContactModel = mongoose.model('Contact',ContactSchema);

module.exports = ContactModel;