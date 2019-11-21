drop database user

create database user;

use user;

create table user (
  id int not null auto_increment,
  user varchar(30) not null,
  email varchar(40) not null,
  pass varchar(30) not null,
  line1 varchar(90) not null,
  line2 varchar(50),
  city varchar(50) not null,
  stat varchar(30) not null,
  zip varchar(30) not null,
  phone varchar(30) not null,
  cc varchar(30) not null,
  expdate varchar(30) not null,
  cvv varchar(30) not null,
  billingzip varchar(30) not null,
  primary key(id)
  );

  