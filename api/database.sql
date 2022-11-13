CREATE DATABASE IF NOT EXISTS football DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

/* Team data structure definition */
CREATE TABLE IF NOT EXISTS team (
    id serial primary key,
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
    stadium_capacity INT,
    places INT,
    website VARCHAR(255),
    trophies jsonb
);

/* Player data structure definition */
CREATE TABLE IF NOT EXISTS player (
    id serial primary key,
    name VARCHAR(255) NOT NULL,
    number INT,
    role VARCHAR(255),
    nationality VARCHAR(255),
    team_id INT,

    FOREIGN KEY (team_id) REFERENCES team(id)
);

CREATE TABLE IF NOT EXISTS link (
    id serial primary key, 
    url VARCHAR(255) NOT NULL,
);