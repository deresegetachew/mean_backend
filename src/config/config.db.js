const mongoose = require('mongoose');

const connectToDb = async () => {
    let db = await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, (err) => {
        console.log(err);
    });


    if (db) {
        db.connection.on('connecting', () => {

        });

        db.connection.on('error', () => {

        });

        db.connection.on('connected', () => {
            console.log('connected to database');
        })
        db.connection.on('open', () => {
            console.log("databse connection opened");
        })
        db.connection.on('reconnected', () => {
            console.log("reconnecting to database");
        })
        db.connection.on('disconnected', () => {

        });

        return db.connection.db;
    }

}


module.exports = { connectToDb };