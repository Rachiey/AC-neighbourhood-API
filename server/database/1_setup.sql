DROP TABLE IF EXISTS neighbourhood;

CREATE TABLE neighbourhood (
    id serial PRIMARY KEY,
    name varchar(25) NOT NULL,
    age int NOT NULL CHECK(age > 0),
    household_number int NOT NULL varchar(25)
);

DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
    id serial PRIMARY KEY,
    address varchar(50) NOT NULL,
    owner_id int
);

DROP TABLE IF EXISTS addresses;

CREATE TABLE address (
    id serial PRIMARY KEY,
    postcode varchar(10) NOT NULL,
    street varchar(255) NOT NULL
);
