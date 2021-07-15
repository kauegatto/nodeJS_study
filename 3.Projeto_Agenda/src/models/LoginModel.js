const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required:true}
});

const LoginModel = mongoose.model('Login',LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    async register(){
        this.valida();
        if(this.errors.length !=0){
            return;
        }
        try{
            this.user = await LoginModel.create(this.body);
        }catch(e){console.log(e);}
    }
    valida(){
        this.cleanUp();
        //1. email válido
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Invalid Email');
        }
        //2. Senha com no mínimo 6 caracteres
        if(this.body.password.length < 6 || this.body.password.length > 100 ){
            this.errors.push('Password length must have between 6 and 100 characters.');
        }
    }
    cleanUp(){
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
        for(const key in this.body){
            if(typeof this.body[key] != 'string'){
                //console.log(key+" was undefined");
                this.body[key] = "";
            }
            //else{
                //console.log(key+" wasn't undefined");
            //}
        }
    }
}
module.exports = Login;

//esse exemplo é feito para testar os models com o mongoDB