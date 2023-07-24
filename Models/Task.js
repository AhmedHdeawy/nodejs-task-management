const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'the name is required'],
        trim: true,
        maxLength: [20, "the name must be less than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)