const connection = require('connection.js');

var orm = {
    create: function(table name, column name, value name, callback) {
        var queryString =
        connection.query(queryString, function(error, result){
            if (error) {
                throw error
            }; 
            callback(result);
        });
    },
    read: function(table name, callback){

    },
    update: function(table name, column name, value name, callback){

    },
}

module.exports = orm