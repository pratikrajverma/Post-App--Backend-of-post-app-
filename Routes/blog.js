const express = require('express');
const router = express.Router();

//import controller
const {dummylike} = require('../controller/LikeController')  //yaha {} isliye laga he kyuki hum multiple function ko uske nam se nikal sakte he


//mapping create
router.get('/dummyrouter',dummylike);



//export router
module.exports = router;