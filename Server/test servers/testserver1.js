const express = require("express");
const cors = require("cors");
const mng = require("mongoose");
const Products = require("./Products");

const app = express();
const port = 3001;

const connection_url = "mongodb+srv://harikrishnan:fordb@cluster0.mkn4pum.mongodb.net/Cluster0?retryWrites=true&w=majority"

mng.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => res.status(200).send("Home Page"));

app.post(".products/add", (req,res) => {
    const productDetail = req.body;

    console.log("Product detail:", productDetail);

    Products.create({username:"user1",userid: 1,productname: "prod1", productid: 1, price: 250, rating: 3,ImgURL: "hello.com"}, (err, data) =>{
        if(err){
            res.status(500).send(err.message);
        }
        else
            res.status(201).send(data);
    })
})

Products.create({username:"user1",userid: 1,productname: "prod1", productid: 1, price: 250, rating: 3,ImgURL: "hello.com"}, (err, data) =>{
    if(err){
        res.status(500).send(err.message);
    }
    else
        res.status(201).send(data);
})

app.listen(port, ()=> console.log("listening on port ", port));