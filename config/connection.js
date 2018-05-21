var mySQL = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mySQL.createConnection({
        host: "localhost",
        port: 3000,
        user: "root",
        password: "mickeymouse",
        dataabase: "burgerMenu"
    });
}

connection.connect();

module.exports = connection;
