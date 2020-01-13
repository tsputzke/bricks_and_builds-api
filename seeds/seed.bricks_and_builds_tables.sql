BEGIN;

TRUNCATE
  favorites,
  inventory,
  bricks_and_builds_users
  RESTART IDENTITY CASCADE;

INSERT INTO bricks_and_builds_users (user_name, password)
VALUES
  ('TestUser', '$2a$10$mhfezzRvTWDvTgqQC49uZObZ1hyvnqF0hRFwRp2KR53q.kY0Z58v6');

INSERT INTO inventory (user_id, set_name, image_url, build_url)
VALUES
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/');

INSERT INTO favorites (user_id, set_name, image_url, build_url)
VALUES
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/'), 
  (1, 'Red Creatures', 'https://cdn.rebrickable.com/media/sets/31032-1.jpg', 'https://rebrickable.com/sets/31032-1/red-creatures/');

COMMIT;