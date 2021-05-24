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
    -- FOREIGN KEY (title) REFERENCES employees (title)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL, 
    role_id INTEGER NOT NULL,
    manager_id INTEGER, -- INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager 
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
    -- FOREIGN KEY (last_name) REFERENCES department (id)
);

-- department id/names

INSERT INTO department (dep_name)
VALUES("legal"), ("engineering"), ("human_resources"),("design"); -- role ids legal = 1 engineering = 2 human resources = 30 design = 40


-- employee role  --

INSERT INTO role (title, salary, dep_id)
VALUES("engineering", 100000.00, 2), ("human resources", 150000.00, 3), ("legal", 200000.00, 1), ("design", 175000.00, 4);


INSERT INTO employees (first_name, last_name, title, role_id, manager_id)

VALUES ("Nick", "Strong", "Engineering", 2, NULL), ("Khabib", "Nurmagomedov","Human Resources", 3, NULL), ("Connor", "McGregor","Engineering", 1, 1), 
("Max", "Holloway","Design", 4, 1), ("Tracy", "Cortez","Human Resources", 2, 1), ("Mackenzie", "Dern","Design", 4, 4), ("Alexa", "Grasso","Engineering", 1, 1), 
("Rose","Namajunas","Human Resources",3,3), ("Rachael","Ostovich","Human Resources",3,3), ("Valentina","Shevchenko","Engineering",2,2), ("Kamaru","Usman","Design",4,4),
("Jorge","Masvidal","Engineering",2,2);



USE employees_db;
SELECT * FROM employees
