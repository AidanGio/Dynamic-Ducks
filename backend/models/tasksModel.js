const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasksSchema = new Schema({
    projectId: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    },
    completion: {
        type: Boolean,
        required: true
    },
    users: {
        type: Array,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    avatar: {
        type: Buffer,
        required: false
    }

}, { timestamps: true })

module.exports = mongoose.model('task', tasksSchema)