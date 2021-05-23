DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;


USE employees_db;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL -- department name
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,4) NOT NULL, 
    dep_id INTEGER NOT NULL, -- INT to hold reference to department role belongs to
    FOREIGN KEY (dep_id) REFERENCES department(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER, -- --INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);

-- department id/names

INSERT INTO department (dep_name)
VALUES("legal"), ("engineering"), ("human_resources"),("design"); -- role ids legal = 1 engineering = 2 human resources = 30 design = 40


-- employee role  --

INSERT INTO role (title, salary, dep_id)
VALUES("engineering", 100000.00, 2), ("human resources", 150000.00, 3), ("legal", 200000.00, 1), ("design", 175000.00, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)

VALUES ("Nick", "Strong", 2, NULL), ("Khabib", "Nurmagomedov", 3, NULL), ("Connor", "McGregor", 1, 1), 
("Max", "Holloway", 4, 1), ("Tracy", "Cortez", 2, 1), ("Mackenzie", "Dern", 4, 4), ("Alexa", "Grasso", 1, 1), 
("Rose","Namajunas",3,3), ("Rachael","Ostovich",3,3), ("Valentina","Shevchenko",2,2), ("Kamaru","Usman",4,4),
("Jorge","Masvidal",2,2);


USE employees_db;
SELECT * FROM department