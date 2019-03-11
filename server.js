const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

MongoClient.connect(db.dbUrl(), {useNewUrlParser: true}, (err, client)=>{
    if(err) return console.log(err)

    database = client.db(db.name);
    require('./app/routes')(app, database);
    app.listen(port, ()=>{
        console.log('here in the port'+port);
    })

    app.use(express.static(__dirname+'/public'));
})