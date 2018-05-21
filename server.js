var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("./public");
app.use("./views");

//===================
//   ROUTES

 app.route("./orm.js");



//===============
//  Port open and listening

app.listen(PORT, function() {
    console.log("app listening on PORT" + PORT);
});