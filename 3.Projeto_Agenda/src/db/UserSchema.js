const mongoose = require('mongoose');
const User = require('../models/UserModel.js');

const UserSchema = new mongoose.Schema({ 
    email: {type: String, required: true},
    password: {type: String, required:true}
});
UserSchema.loadClass(User);

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;