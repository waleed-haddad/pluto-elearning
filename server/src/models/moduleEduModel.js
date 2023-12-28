// Creates the Schema for each ModuleEducational
const moduleEduSchema = new mongoose.Schema({
    courseId:{
        type: Number,
        required: true,
    },
    vidLink:{
        type: [String],
        required: true,
    },
    transcript: {
        type: [String],
        required: false,
    },
    info: {
        type: [String],
        required: false,
    },
});

const moduleEduModel = mongoose.model('moduleEdu', moduleEduSchema)
module.exports = moduleEduModel;