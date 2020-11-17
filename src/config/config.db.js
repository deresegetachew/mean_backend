const mongoose = require('mongoose');


const connectToDb = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
    }
    catch (e) {
        console.log("???", e);
    }





}


module.exports = { connectToDb };