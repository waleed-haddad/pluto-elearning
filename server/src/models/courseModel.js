const mongoose = require('mongoose');

// Creates the Schema for courses
const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: true,
    },
    generalDesc: {
        type: String,
        required: true,
    },
    totalDuration: {
        type: String,
        required: true,
    },
    nOfModules: {
        type: Number,
        required: true,
    },
    courseId:{
        type: Number,
        required: true,
    }
});

const courseModel = mongoose.model('courses', courseSchema);
module.exports = courseModel;