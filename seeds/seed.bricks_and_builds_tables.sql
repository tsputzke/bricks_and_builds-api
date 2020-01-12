BEGIN;

TRUNCATE
  favorites,
  inventory,
  bricks_and_builds_users
  RESTART IDENTITY CASCADE;

INSERT INTO bricks_and_builds_users (user_name, password)
VALUES
  ('TestUser', '$2a$10$mhfezzRvTWDvTgqQC49uZObZ1hyvnqF0hRFwRp2KR53q.kY0Z58v6');

INSERT INTO inventory (user_id)
VALUES
  (1), (1), (1), (1), (1), (1), (1), (1), (1), (1);

INSERT INTO favorites (user_id) 
VALUES
  (1), (1), (1), (1), (1), (1), (1), (1), (1), (1);

COMMIT;