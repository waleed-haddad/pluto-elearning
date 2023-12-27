// Creates the Schema for each moduleQuiz
const moduleQuizSchema = new mongoose.Schema({
    courseID: {
        type: Number,
        required: true,
    },
    quizQuestion: {
        type: [String],
        required: true,
    },
    quizOptions: {
        type: [[String]],
        required: true,
    },
    quizSolutions: {
        type: [Number],
        required: true,
    },
});

const moduleQuizModel = mongoose.model('moduleQuiz', moduleQuizSchema)
module.exports = moduleQuizModel;