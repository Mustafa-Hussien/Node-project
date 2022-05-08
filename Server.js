/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create instance of the app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

const port = 8000;

const server = app.listen(port, ()=>{console.log(`running localhost on port: ${port}`)});

app.get('/', function(req, res){
    res.send('Hello Mustafa');
})

const data = [];

app.post('/addMovie', addMovie)

function addMovie(){
    console.log(req.body);
    data.push(req.body);
}