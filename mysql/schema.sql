CREATE database employee_tracker;

USE employee_tracker;

CREATE table department (
id INT AUTO_INCREMENT,
name VARCHAR(30), 
PRIMARY KEY(id)
);

CREATE table role (
id INT AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY(id)
);

CREATE table employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id) 
);
