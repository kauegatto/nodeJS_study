const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type:String}
});
const HomeModel = mongoose.model('Home',HomeSchema);

module.exports = HomeModel;

//esse exemplo é feito para testar os models com o mongoDB