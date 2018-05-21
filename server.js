var express = require("express");
var bodyParser = require("body-parser");

var mySQL = require("mysql");

var path = require("path");
var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//===================
//   ROUTES





//===============
//  Port open and listening

app.listen(PORT, function() {
    console.log("app listening on PORT" + PORT);
});