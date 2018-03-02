const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require("path");
const Twitter = require('twitter');
const keys = require('./keys');
const PORT = process.env.PORT || 3001;

const dotenv = require('dotenv');
dotenv.load();

// instantiate express
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolioMessages";


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set Mongoose to use Promises
// connect to the MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


//set twitter keys
const client = new Twitter(keys);


// set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')));

// Endpoint for sending tweets
app.get("/api", (req,res)=> {
    client.get('search/tweets', {q: "mikeD_Developer", count: 20})
        .then(tweets =>{
            console.log(tweets)
            res.send(tweets);
        })
        .catch(err => console.log(err));
});

// path to built front end
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// start server
app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));
