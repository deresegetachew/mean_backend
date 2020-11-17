const mongoose = require('mongoose');


const connectToDb = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27018/meandb', { useNewUrlParser: true }, (err) => {
        });

        // await mongoose.connect('mongodb://localhost/meandb', { useNewUrlParser: true }, (err) => {
        // });

        mongoose.connection.once('opened', () => { console.log("connection opened") });
        mongoose.connection.on('connected', () => { console.log('connected to mongodb') });
        mongoose.connection.on('error', (err) => { console.log("on error", err) });
    }
    catch (e) {
        console.log("???", e);
    }





}


module.exports = { connectToDb };