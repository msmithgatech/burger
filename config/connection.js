var mySQL = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
    connecction = +mySQL.createConnection({
        host: "localhost",
        port: 8080,
        user: "root",
        password: "mickeymouse",
        dataabase: "burgerMenu"
    });
}

connection.connect();

module.exports = connection;
