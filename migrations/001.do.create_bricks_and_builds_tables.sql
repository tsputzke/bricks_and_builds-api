DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS bricks_and_builds_users;

CREATE TABLE bricks_and_builds_users (
  user_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE inventory (
  inventory_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INTEGER REFERENCES bricks_and_builds_users(user_id),
  set_name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  set_num TEXT NOT NULL
);

CREATE TABLE favorites (
  favorites_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INTEGER REFERENCES bricks_and_builds_users(user_id),
  set_name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  set_num TEXT NOT NULL
);