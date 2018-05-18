//connection boilerplate scripts from the laptop please
//look at the old sleepy cats exercise for guidance on this

//dependencies
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(error){
    if (error) {
        console.log("error" + error);
    }
    console.log("connected successfully");
});

module.exports = connection;