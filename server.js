const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require("path");

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

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')));
// Path to built front end
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));
