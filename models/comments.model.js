const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentsSchema = new Schema({
    phone: {type: String, required: true},
    user: {type: String, required: true},
    text: {type: String, required: true}
}, {
    timestamps: true
}
)

const comments = mongoose.model('comments', commentsSchema)

module.exports = comments
