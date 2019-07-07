const express = require('express') ;
const mongoose = require('mongoose') ;
const bodyParser = require('body-parser') ;

const goals = require('./routes/api/goals');
const app = express();

//body-parser Middleware
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then((connection) => {console.log("Mongodb connected")})
    .catch((err) => {console.log("Error : ",err)});

app.use('/api/goals/',goals)
const port = process.env.PORT || 5000;

app.listen(port,() => { console.log(`Server running in port : ${port}`)});