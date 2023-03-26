const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leadsSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Number: {
        type: String,
        required: true
    },
    Success: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('lead', leadsSchema)