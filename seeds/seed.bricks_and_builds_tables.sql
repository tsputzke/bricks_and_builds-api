BEGIN;

TRUNCATE
  favorites,
  inventory,
  bricks_and_builds_users
  RESTART IDENTITY CASCADE;

INSERT INTO bricks_and_builds_users (user_name, password)
VALUES
  ('TestUser', '$2a$10$mhfezzRvTWDvTgqQC49uZObZ1hyvnqF0hRFwRp2KR53q.kY0Z58v6');

INSERT INTO inventory (user_id, set_name, image_url, set_num)
VALUES
  (1, 'Bricks and Ideas', 'https://cdn.rebrickable.com/media/sets/11001-1/10871.jpg', '11001-1'), 
  (1, 'Basic Brick Set', 'https://cdn.rebrickable.com/media/sets/11002-1/10873.jpg', '11002-1'), 
  (1, 'Creative Fun', 'https://cdn.rebrickable.com/media/sets/11005-1/14811.jpg', '11005-1'), 
  (1, 'Rainbow Fun', 'https://cdn.rebrickable.com/media/sets/10401-1/1121.jpg', '10401-1'), 
  (1, 'Red Creative Box', 'https://cdn.rebrickable.com/media/sets/10707-1/6339.jpg', '10707-1');

INSERT INTO favorites (user_id, set_name, image_url, set_num)
VALUES
  (1, 'Pink Car', 'https://cdn.rebrickable.com/media/mocs/moc-29852.jpg', 'MOC-29852'), 
  (1, '11001 Two Creatures', 'https://cdn.rebrickable.com/media/mocs/moc-29591.jpg', 'MOC-29591'), 
  (1, '11001 Green Guy', 'https://cdn.rebrickable.com/media/mocs/moc-26314.jpg', 'MOC-26314'), 
  (1, '10401-Handheld Alien', 'https://cdn.rebrickable.com/media/mocs/moc-23792.jpg', 'MOC-23792'), 
  (1, 'Rainforest creature', 'https://cdn.rebrickable.com/media/mocs/moc-23082.jpg', 'MOC-23082');

COMMIT;