-- !!!!!CHANGE TO EMPLOYEES FOR THIS FILE !!!!! -- 





DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;


USE employees_db;


CREATE TABLE department (

    id INTEGER AUTO_INCREMENT PRIMARY KEY
    depName VARCHAR(30) NOT NULL -- department name
    
  
);

CREATE TABLE role (

    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL 
    salary DECIMAL NOT NULL
    department_id INTEGER(11) -- INT to hold reference to department role belongs to

  
);

CREATE TABLE employee (

    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL 
    last_name VARCHAR(30) NOT NULL
    role_id INTEGER 
    manager_id INTEGER(10) --INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
);

-- department id/names

INSERT INTO department (depName)
VALUES (legal)
VALUES (enginieering)
VALUES (human_resources)
VALUES (design)


-- employee role  --

INSERT INTO role (first_name, last_name, role_id, depName)
VALUES("Nick", "Strong", role_id, department_id)


INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Nick", "Strong", role_id, manager_id)





INSERT INTO employee (name, first_name, last_name, role_id )
VALUES ("Ahmed", TRUE, "Rockington", 100);

