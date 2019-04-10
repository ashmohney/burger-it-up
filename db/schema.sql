### Schema


DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id          int(11) NOT NULL AUTO_INCREMENT,
  burger_name varchar(200) NOT NULL,
  devoured    tinyint(1) DEFAULT 0,
  PRIMARY KEY (id)
) 