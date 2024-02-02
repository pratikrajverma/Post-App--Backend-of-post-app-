const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Connected to database successfully');
        }).catch(err => {
            console.log(err);
        })
}

module.exports = connectDb;

