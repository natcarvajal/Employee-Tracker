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
  manager_id INT
  PRIMARY KEY (id)
);

SELECT * FROM top5000;
select * from top_albums;
