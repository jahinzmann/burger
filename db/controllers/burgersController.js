var express = require("express");
var bodyparser = require("body-parser");
// var app = express.app();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Routes
module.exports = function(app) {



    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {
        orm.read('burger').then(function(data) {
            result.render('index' {
                burgers: data,
                helpers: {
                    isEaten: function(burger) {
                        if (burger.devoured === true) {
                            return "#" + burger.id + '' + burger.burgerName;
                        } else {
                            return;
                        }
                    }
                },


            });
        })
    });

    app.post("/create", function(req, res) {
        orm.create('burgers', {
            burger_name: req.body.burger,
            devoured: false
        }).then(function(data) {});
    });


    app.get("/newBurger", function(req, res) {
        orm.create('burgers').then(function(data) {
            result.send(data);
        })
    });


    app.get('/isEaten', function(req, res) {
        orm.update('burgers', 'devoured', 'id', req.body.id).then(function(data) {});
    });



}; //end module.exports