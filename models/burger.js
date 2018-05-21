require("../config/orm.js");

var burger = {

         //  EX: SELECT * from burgerMenu
    selectAll: function(whatToSelect, tableName, cb) {
        orm.selectAll(["*", burgerMenu], function(res) {
            cb(res);
        });

    },
         //  EX: SELECT burgerName FROM burgerMenu WERE burgerName = "Magnum Force"
    insertOne: function(whatToSelect, tableName, objColVal, cb) {
        orm.insertOne([burgerName, burgerMenu, burgerName, objColVal], function(res) {
            cb(res);
        });
    },

         //  EX: UPDATE burgerName SET devoured: "yes" WHERE burgerName = "Bullitt"
    updateOne: function(whatToSelect, objToSQL, objColVal, whatVal, cb) {
        orm.updateOne([burgerName, devoured, true, burgerName, whatVal], function(res) {
            cb(res);
        });
    }
};

method.exports = burger;