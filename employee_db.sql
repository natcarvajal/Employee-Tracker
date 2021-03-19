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

CREATE TABLE roles (
    -- id - INT PRIMARY KEY
    -- title -  VARCHAR(30) to hold role title
    -- salary -  DECIMAL to hold role salary
    -- department_id -  INT to hold reference to department role belongs to
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE employee (
--     id - INT PRIMARY KEY
    -- first_name - VARCHAR(30) to hold employee first name
    -- last_name - VARCHAR(30) to hold employee last name
    -- role_id - INT to hold reference to role employee has
    -- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;
select * from top_albums;
