const express = require('express');
const app = express();

const connectDb = require('./config/database');
 



//loading dotenv
require('dotenv').config();
const PORT = process.env.PORT || 4000 


//middleware
app.use(express.json());




//router loading
const blog = require("./Routes/blog")
app.use("/api/v1",blog)       //yaha we are merging two routes and callback function where we define our logic  1./api/v1  2.(route, controller) 

 







//server loading 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} ` );
});
  




 
//database connection 
connectDb();




//server port testing in root path
app.get('/', (req, res)=>{
    res.send(`<h1>Home page my server is running at ${PORT}</h1>`);
}) 


