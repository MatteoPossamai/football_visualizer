CREATE DATABASE IF NOT EXISTS football DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

/* Team data structure definition */
CREATE TABLE IF NOT EXISTS team (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    colors VARCHAR(255),
    symbols VARCHAR(255),
    anthem VARCHAR(255),
    city VARCHAR(255),
    nation VARCHAR(255),
    confederation VARCHAR(255),
    federation VARCHAR(255),
    championship VARCHAR(255),
    foundation INT, 
    owner VARCHAR(255),
    president VARCHAR(255),
    manager VARCHAR(255),
    stadium VARCHAR(255),
    places INT,
    website VARCHAR(255),
    trophies VARCHAR(1000),

    PRIMARY KEY (id)
);

/* Player data structure definition */
CREATE TABLE IF NOT EXISTS player (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    number INT,
    role VARCHAR(255),
    nationality VARCHAR(255),

    PRIMARY KEY (id),
    FOREIGN KEY (team_id) REFERENCES team(id)
);