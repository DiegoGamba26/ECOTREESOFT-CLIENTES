-- to create a new database
CREATE DATABASE ecotreesoft;

-- to use database
use ecotreesoft;

-- creating a new table
CREATE TABLE productos (
  id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) ,
  descripcion TEXT,
  fecha DATE DEFAULT CURRENT_TIMESTAMP,
  imagen VARCHAR(255),
  url VARCHAR(255)
);
drop table productos;
-- to show all tables
show tables;

-- to describe table
describe productos;

select * from productos;