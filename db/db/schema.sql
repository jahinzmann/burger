Create DATABASE if not exists burgers_db;
USE burgers_db;

Create TABLE burgers (
     id int auto_increment,
     burger_name VARCHAR(100),
     devoured BOOLEAN,
     PRIMARY KEY (id),
);