const validator = require('validator');
const bcryptjs = require('bcryptjs');
const UserSchema = require("../db/UserSchema.js");

class AuthService {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    async register(){
        this.validate();
        if(this.errors.length !=0){
            return;
        }
        await this.userExists();
        if(this.errors.length !=0){
            return;
        }
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        try{
            this.user = await UserSchema.create(this.body);
        }catch(e){console.log(e);}
    }
    async login(){
        this.validate();
        if(this.errors.length !=0){
            return;
        }
        this.user = await UserSchema.findOne({email:this.body.email});
        if(!this.user){
            this.errors.push("This user doesn't exist");
            return;
        }
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push("Incorrect password");
            this.user = null;
            return;
        }       
    }
    async userExists(){
        this.user = await UserSchema.findOne({email:this.body.email});
        if(this.user){
            this.errors.push("Email already exists");
        }
    }
    validate(){
        this.cleanUp();
        //1. email válido
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Invalid Email');
        }
        //2. Senha com no mínimo 6 caracteres
        if(this.body.password.length < 6 || this.body.password.length > 100 ){
            this.errors.push('All passwords must have between 6 and 100 characters.');
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
module.exports = AuthService;