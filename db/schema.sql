DROP database if exists burger_db;
CREATE database burger_db;

USE burger_db;

CREATE TABLE burgerMenu(
   id  integer(30) auto_increment not null,
   name varchar(75),
   devoured  boolean not null,
   primary key (id)
);

INSERT INTO burgerMenu(id, name, devoured)
VALUES
   (25, "Cool Hand Luke", false),
   (88, "Crazy 88s", false),
   (3, "Magnum Force", false),
   (77, "Bullitt", false),
   (12, "LowDown Dirty Shame", false),
   (60, "Gator Bait", false)