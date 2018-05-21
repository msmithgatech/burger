   // Import `connection.js`

require("./connection.js");

   //  Create the methods to execute MySQL commands in the controllers
   //  for listing all burgers, adding a new burger, and updating an existing burger

function objToSql(ob) {
    var ary = [];
    // PUSH THE KEY/VALUE PAIRS AS A STRING INTO THE variable ARY
    for (var key in ob) {
        var value = ob[key];
                   // SKIP HIDDEN PROPERTIES
        if (Object.hasOwnProperty.call(ob, key)) {
                   //  PUT QUOTES AROUND STRINGS WITH SPACES
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
                  // {devoured: true} => ["devoured=true"]
            ary.push(key + "=" + value);
        }
    }
}


var orm = {
    selectAll: function(whatToSelect, tableName, cb) {
        //  select * from burgerMenu
        var listAll = "SELECT ";
            listAll += whatToSelect;
            listAll += tableName;
        connection.query(listAll, [whatToSelect, tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(whatToSelect, tableName, objColVal, cb) {
        //  EX: SELECT burgerName FROM burgerMenu WERE burgerName = "Agatha Christie"
        //  whatToSelect = burgerName    tableName = burgerMenu
        //  whatToSelect = burgerName    objColVal = "Cool Hand Luke"
        var getOne = "SELECT " + whatToSelect;
            getOne += " FROM " + tableName;
            getOne += " WHERE " + whatToSelect;
            getOne += " = " + objColVal;
        console.log(getOne);

        connection.query(getOne, [whatToSelect, tableName, whatToSelect, objColVal], function (err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },

    updateOne: function(whatToSelect, objToSQL, objColVal, whatVal, cb) {
        //  EX: UPDATE burgerName SET devoured: "yes" WHERE burgerName = "Cool Hand Luke"
        //  whatToSelect = burgerName
        //  objToSQL = "{devoured:
        //  objColVal = 'yes'}
        //  condition = "WHERE burgerName = "Cool Hand Luke"
        var updOne = "UPDATE " + whatToSelect;
             updOne += " SET " + objToSQL(objColVal);
             updOne += " WHERE " + whatToSelect;
             updOne += " = " + whatVal;

        console.log(updOne);

        connection.query(updOne, [whatToSelect, objToSQL, objColVal, whatVal], function (err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    }
   };

   method.exports = orm;