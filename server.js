//dependencies
const express = require('express');
      bodyParser = require('body-parser');
      mysql = require('mysql');

var app = express();
var expressHandlebars = require('express-handlebars');

var connection = require('./config/connection.js');

//status content from the public directory
app.use(express.static(__dirname + '/public'));

//parse application
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public/assets/styles'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require('./controllers/burgersController.js')(app);

var port = 3000;
app.listen(port, function() {
    console.log("Listening on PORT" + port);
});