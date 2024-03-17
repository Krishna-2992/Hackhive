const mongoose = require('mongoose')

const breachSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    value: {
        type: String
    }
})

const breach = mongoose.model('breach', breachSchema)
module.exports = breach
