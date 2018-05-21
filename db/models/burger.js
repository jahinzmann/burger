const orm = require('../config/orm.js');

var burger = {
    create: function(vals, cb) {
        orm.create("burgers", "burger_name", "devoured", vals, function(res) {
          cb(res);
        });
      },
    read: function(cb) {
        orm.read("burgers", function(res) {
          cb(res);
        });
      },
    update: function(vals, cb) {
        orm.create("burgers", "devoured", vals, function(res) {
          cb(res);
        });
      },
}

module.exports = burger;