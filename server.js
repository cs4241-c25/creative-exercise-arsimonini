const express = require('express');
const path = require('path');
const res = require("express/lib/response");
const MongoClient = require('mongodb').MongoClient;
//const bycrpt = require('bcrypt');

const url = 'mongodb+srv://simoniniar:arsim@cluster0.jasnw.mongodb.net/';

const connection = new MongoClient(url);

const

    dir  = "public/",
    port = 3000

const users = [];


//Appdata, I should likely try to update this
//let appdata = []

//Created the server apparently
const app = express();
app.use(express.json());

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, dir, "index.html"));
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, dir, "index.html"));
})

const appRun = run();

//port - whenever is port number, () - do this function
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


async function run() {
    await connection.connect().then(()=> console.log("connected to the server"))

    //const collection = await connection.db("testDB").collection("testDBCollection");
    //const results = await collection.insertOne({"title": "Call of Duty"});

    //console.log(results);
}

async function getData(req) {
    const collection = await connection.db("testDB").collection("testDBCollection");

    console.log(collection.find().toArray())
    return await collection.find().toArray()
}