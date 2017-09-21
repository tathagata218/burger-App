create database burgers_db;
use burgers_db;
create table burgers ( ID int auto_increment primary key, burger_name varchar(225) not null, devoured bool not null, `date` date not null);