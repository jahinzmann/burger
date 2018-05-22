const connection = require('connection.js');

var orm = {
    create: function(tableName, columnName1, columnName2, valueName, callback) {
        var queryString = "INSERT INTO" + tableName + "(" + columnName1 + "," + columnName2 + ") VALUES (" + valueName + ", false);" 
        connection.query(queryString, function(error, result){
            if (error) {
                throw error
            }; 
            callback(result);
        });
    },
    read: function(tableName, callback){
        var queryString = "SELECT * FROM" + tableName + ";"
        connection.query(queryString, function(error, result){
            if (error) {
                throw error
            }; 
            callback(result);
        });
    },
    update: function(tableName, columnName, valueName, callback){
        var queryString = "UPDATE" + tableName + "SET" + columnName + "= true WHERE ID=" + valueName + ";"
        connection.query(queryString, function(error, result){
            if (error) {
                throw error
            }; 
            callback(result);
        });
    },
}

module.exports = orm