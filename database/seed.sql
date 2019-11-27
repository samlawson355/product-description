CREATE DATABASE IF NOT EXISTS amazonProductDescriptions;

USE amazonProductDescriptions;

CREATE TABLE IF NOT EXISTS products(
  id INT AUTO_INCREMENT PRIMARY KEY,
  productName TEXT,
  productDesc TEXT
);