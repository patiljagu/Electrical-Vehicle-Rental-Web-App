const mongoose = require('mongoose')

const connectDB = async () => {
    const CAR_API_URl = process.env.MONGODB_URL
    mongoose.connect(CAR_API_URl, {
        useNewUrlParser: true,
    }, (err) => {
        if (!err) {
            console.log('MongoDB server Connected.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}
module.exports = connectDB