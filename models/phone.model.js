const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phonesSchema = new Schema ({
    name: {type: String, required: true},
    storage: {type: Number, requied: true},
    ram: {type: Number, required: true},
    display: {type: String, required: true},
    price: {type: Number, required: true},
    imageBase64: {type: String, required: true},
    image: {type: Buffer,  required:true},
    votesE: {type: Number, default:0},
    votesVG: {type: Number, default:0},
    votesG: {type: Number, default:0},
    votesP: {type: Number, default:0},
    votesVP: {type: Number, default:0}
}, {
    timestamps: true
})

const phones = mongoose.model('phones', phonesSchema)

module.exports = phones
