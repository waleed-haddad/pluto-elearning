const mongoose = require('mongoose');
const express = require("express");
const routes = require('./routes/routes')

require('dotenv').config()
const connectionLink = process.env.DATABASE_URL;

// Connecting to mongodb database
mongoose.connect(connectionLink);

//Checking if connection is made succesfully or not
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error)
});
db.once('connected', () =>{
    console.log('Database Succesfully Connected');
});


//REST API
const app = express();
//Allow app to parse json
app.use(express.json());

app.use('/api', routes);

app.listen(3010, () => {
    console.log("Server starting on port 3010")
});