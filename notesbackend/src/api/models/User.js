const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: {
        type : String, 
        required :true,
        minlength : 3
    },
    email : {
        type : String, 
        required : true,
        unique : true,
        dropDups : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
    contact : {
        type:  String, 
        required:true,
        minlength : 3
    },
});

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})



module.exports = mongoose.model('User', userSchema);
