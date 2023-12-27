const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    userLevel: {
        type: Number,
        required: true,
    },
    courses: {
        type: Map,
        of: String
    },
    achievements: [{
            name: String,
            dateAchieve: Date
    }],
    dateJoined: {
        type: Date,
        required: true
    }
});
    
const userModel = mongoose.model('userInfos', userSchema)
module.exports = userModel;