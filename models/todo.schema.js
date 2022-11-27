const mongoose = require('mongoose');

const todoShchema = new mongoose.Schema({
    user:{
        type: mongoose.ObjectId,
        ref: 'User', 
        required: true
    },
    title: {
        maxLength: [40, 'Title should not be more than 40 char'],
        trim: true,
        type: String
    },
    task : [{
        type: String,
        isComplete: Boolean
    }],
    bgcolor: String,
}, {timestamps: true})


module.exports = mongoose.model('Todo', todoShchema);