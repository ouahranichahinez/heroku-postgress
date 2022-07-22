SELECT current_database();
SELECT current_user;

CREATE TABLE artists (
  id INTEGER PRIMARY KEY,
  name TEXT
);
INSERT INTO artists VALUES(0, 'Radiohead');
-- ...

CREATE TABLE titles (
  id INTEGER PRIMARY KEY,
  artist INTEGER,
  name TEXT,
  FOREIGN KEY(artist) REFERENCES artists(id)
);
INSERT INTO titles VALUES(0, 0, 'Paranoid android');