DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;


USE employees_db;


CREATE TABLE department (

    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL -- department name
    
  
);

CREATE TABLE empRole (

    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,4) NOT NULL, 
    dep_id INTEGER NOT NULL -- INT to hold reference to department role belongs to
    
    
    

  
);

CREATE TABLE employees (

    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NULL -- --INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
);

-- department id/names

INSERT INTO department (dep_name)
VALUES("legal"), ("engineering"), ("human_resources"),("design"); -- role ids legal = 10 engineering = 20 human resources = 30 design = 40


-- employee role  --

INSERT INTO empRole (title, salary, dep_id)
VALUES("engineering", 100000.00, 20), ("human resources", 150000.00, 30), ("legal", 200000.00, 10), ("design", "175000.00", "40");


INSERT INTO employees (first_name, last_name, role_id, manager_id)

VALUES ("Nick", "Strong", 20, 2), ("Khabib", "Nurmagomedov", 30, 3), ("Connor", "McGregor", 10, 1), 
("Max", "Holloway", "40", "4"), ("Tracy", "Cortez", 20, 2), ("Mackenzie", "Dern", 40, 4), ("Alexa", "Grasso", 10, 1), 
("Rose","Namajunas","30","3"), ("Rachael","Ostovich","30","3"), ("Valentina","Shevchenko","20","2"), ("Kamaru","Usman","40","4"),
("Jorge","Masvidal","20","2");


USE employees_db;
SELECT * FROM employees



