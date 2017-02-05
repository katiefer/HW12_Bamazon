CREATE DATABASE IF NOT EXISTS bamazon4;

USE bamazon4;


CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
  PRIMARY KEY (id)
  );