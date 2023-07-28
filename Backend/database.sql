CREATE DATABASE student_details;

\c student_details;

CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    stud_name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    add_1 VARCHAR(50) NOT NULL,
    add_2 VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state_name VARCHAR(50) NOT NULL,
    pin_code INTEGER NOT NULL,
);

-- CREATE TABLE student( id SERIAL PRIMARY KEY, stud_name VARCHAR(50) NOT NULL, dob DATE NOT NULL, gender VARCHAR(10) NOT NULL, add_1 VARCHAR(50) NOT NULL, add_2 VARCHAR(50) NOT NULL, city VARCHAR(50) NOT NULL, state_name VARCHAR(50) NOT NULL, pin_code INTEGER NOT NULL);