const mongoose = require('mongoose');


const commentschema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,   //iska matlab hai ki "post" field ka data type MongoDB ObjectId hoga MongoDB mein har document ko uniquely identify karne ke liye ObjectId ka use hota hai. Jab aap kisi document ko refer karte hain, jaise ki isme "post" field mein, toh aap ObjectId ka use karte hain
        ref:"Post",  //iska matlab hai ki id Post model ko refer kar raha he jiska document bana he mongodb me 
        required:true
    },

    user:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('comment',commentschema);