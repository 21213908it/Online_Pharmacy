const express = require("express")
const mongoose = require('mongoose')

const products = require("./products")
const cors = require('cors');

const app = express();

require("dotenv").config()

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our Online Pharmacy API...")
});

app.get("/products", (req, res) => {
    res.send(products)
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
   //listen for request
   app.listen(process.env.PORT, () => {
    console.log("connected to Mongodb & listeneing on port", process.env.PORT)
    })
       
})

const port = process.env.PORT || 4000;

const URI = process.env.MONGO_URI;

/*app.listen(port,console.log("Server running on port ${port}"));*/

/*mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection successFul..."))
.catch((err) => console.log("MongoDB connection failled", err.message));*/
