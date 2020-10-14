const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserFave =  new Schema({
    UID: {
        type: String,
        required: true
    },
    faveVids: {
        type: Array,
    }
})

const Fave = mongoose.model("Fave", UserFave)

module.exports = Fave;


