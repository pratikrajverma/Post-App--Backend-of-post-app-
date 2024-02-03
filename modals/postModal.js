const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }, 
    body:{
        type:String,
        required:true
    }, 
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like' //iska matlab he ki ye id like modal schema ko refer kar rahi he jiska data document ke rup me store he mongodb me
    }],
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' //iska matlab he ki ye id comment modal schema ko refer kar rahi he jiska data document ke rup me store he mongodb me
    }]

})

module.exports = mongoose.model('Post',postschema);
     
