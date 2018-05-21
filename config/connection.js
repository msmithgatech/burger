require("dot-env");
var mySQL = require("mysql");
var connection = mySQL.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "process.env.DATABASE_PASSWORD",
    dataabase: "burgerMenu"
});

connection.connect(function(err) {
    if (err) {
        console.log(" UNABLE TO CONNECT TO DB: " + err.stack);
        return
    }
    console.log("**** burgerMenu DB connection id: " + connection.threadId);
});

module.exports = connection;
