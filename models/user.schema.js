import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import Crypto from 'crypto';
import config from '../config/config'

const userShchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        trim: true,
        type: String
    },
    password: {
        type: String,
        maxLength: [6, "Password Should be at least 6 Charecter"]
    }
}, {timestamps: true})


userShchema.pre('save', function(next){

})

module.exports = mongoose.model('User', userShchema);