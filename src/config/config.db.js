const mongoose = require('mongoose');


const connectToDb = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

        mongoose.connection.once('opened', () => { console.log("connection opened") });
        mongoose.connection.on('connected', () => { console.log('connected to mongodb') })
    }
    catch (e) {
        console.log("???", e);
    }





}


module.exports = { connectToDb };