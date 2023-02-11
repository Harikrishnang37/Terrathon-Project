const express = require("express");
const cors = require("cors");
const mng = require("mongoose");
const Products = require("./Products");
const Users = require("./Users");

const app = express();
const port = 8000;

const connection_url = "mongodb+srv://harikrishnan:fordb@cluster0.mkn4pum.mongodb.net/Cluster0?retryWrites=true&w=majority"

mng.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => res.status(200).send("Home Page"));

app.post("/products/add", (req,res) => {
    const productDetail = req.body;

    console.log("Product detail:", productDetail);

    Products.create(productDetail, (err, data) =>{
        if(err){
            res.status(500).send(err.message);
        }
        else
            res.status(201).send(data);
    })
})

app.post("/users/add", (req,res) => {
    const UserDetail = req.body;

    console.log("User detail:", UserDetail);

    Users.create(UserDetail, (err, data) =>{
        if(err){
            res.status(500).send(err.message);
        }
        else
            res.status(201).send(data);
    })
})

app.get("/users/verify", (req,res) => {
    
    Users.find().then(prod => res.json(prod)).catch(err =>res.status(400).json("Error"+err))
    //console.log(Products.find());
})

app.listen(port, ()=> console.log("listening on port ", port));