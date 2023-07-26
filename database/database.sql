CREATE DATABASE firstapi;

CREATE TABLE users(
    id serial primary key,
    name varchar(40),
    email text()
);

INSERT INTO users (name,email) VALUES ('JUAN', 'juan@gmail.com'),('raul', 'raul@gmail.com')