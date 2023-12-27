const mongoose = require('mongoose');

const userVerificationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});
    
const userVerfModel = mongoose.model('userVerf', userVerificationSchema)
module.exports = userVerfModel;