const mongoose = require('mongoose');


const commentschema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,   //iska matlab hai ki "post" field ka data type MongoDB ObjectId hoga MongoDB mein har document ko uniquely identify karne ke liye ObjectId ka use hota hai. Jab aap kisi document ko refer karte hain, jaise ki isme "post" field mein, toh aap ObjectId ka use karte hain
        ref:"post",  //iska matlab hai ki id kisko refer kar raha he
        // required:true
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