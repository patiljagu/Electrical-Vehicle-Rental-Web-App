const mongoose = require('mongoose')

const VehicleSchema = mongoose.Schema({
    ClientName: String,
    Model: String,
    Company: String,
    Image: String,
    Rent: Number

})
module.exports = mongoose.model('Vehicle', VehicleSchema)
