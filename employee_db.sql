DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department ( 
-- id - INT PRIMARY KEY
-- name - VARCHAR(30) to hold department name
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("HR");

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Legal");

CREATE TABLE role (
    -- id - INT PRIMARY KEY
    -- title -  VARCHAR(30) to hold role title
    -- salary -  DECIMAL to hold role salary
    -- department_id -  INT to hold reference to department role belongs to
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Representative", 45000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Regional Sales Director", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager Commercial", 72000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sr. HR Business Partner", 95000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Assistant", 31000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resource Coordinator", 55000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Accountant", 68000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Accountant", 94000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Financial Director", 157000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Coordinator", 54000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Product Marketing Manager", 120000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Director of Marketing", 222000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Contract Attorney", 140000, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Paralegal", 66000, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Attorney", 120000, 5);

CREATE TABLE employee (
--     id - INT PRIMARY KEY
    -- first_name - VARCHAR(30) to hold employee first name
    -- last_name - VARCHAR(30) to hold employee last name
    -- role_id - INT to hold reference to role employee has
    -- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Natalia", "Carvajal", 1 , null),
("Jose", "Smith", 3, null),
("Baxter", "Doll", 4 , null),
("Lenny", "Vaz", 2 , null),
("Magnolia", "Arteaga", 3 , null),
("Olga", "Fuent", 3 , null),
("Al", "Cox", 1 , null),
("Jesse", "Borbee", 2 , null),
("Cassandra", "Lexington", 2 , null),
("Alexa", "Duglous", 4 , null),
("Michael", "Honey", 5 , null),
("Sarah", "Dook", 5 , null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;