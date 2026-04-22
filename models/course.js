const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Course', courseSchema);
