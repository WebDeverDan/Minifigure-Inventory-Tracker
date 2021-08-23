DROP DATABASE IF EXISTS collection_db;

CREATE DATABASE collection_db;

USE collection_db;

CREATE TABLE users(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    pass_word VARCHAR(30) NOT NULL,
    email_address VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_figures(
    id INT NOT NULL,
    users_id INT,
    figure_name VARCHAR(50) NOT NULL,
    figure_theme VARCHAR(20) NOT NULL,
    figure_condition VARCHAR(15) NOT NULL,
    figure_value INT NOT NULL,
    FOREIGN KEY (users_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);