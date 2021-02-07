-- CREATE DATABASE meal_budgeter;

USE manage_transaction;

-- User Sid
INSERT INTO users (username, password, createdAt, updatedAt) 
VALUES 
('Sid', '$2a$10$MtdGCk8X7B6dN.m21zmEoeK6AIqiHC0MwQxToCfKJcLK27P.UFwgi', NOW(), NOW()),
('Simone', '$2a$10$MtdGCk8X7B6dN.m21zmEoeK6AIqiHC0MwQxToCfKJcLK27P.UFwgi', NOW(), NOW()),
('Tom', '$2a$10$MtdGCk8X7B6dN.m21zmEoeK6AIqiHC0MwQxToCfKJcLK27P.UFwgi', NOW(), NOW()),
('Will', '$2a$10$MtdGCk8X7B6dN.m21zmEoeK6AIqiHC0MwQxToCfKJcLK27P.UFwgi', NOW(), NOW());



INSERT INTO transactions (type, name, value, createdAt, updatedAt, user_id) 
VALUES 
-- Simone favourited Boiled Egg
('travel', 'work', 30000, "2020-01-01", NOW(), 1, 2),
('travel', 'school', 2000, "2020-01-13", NOW(), 1, 2),
('travel', 'holiday', 10000, "2020-01-24", NOW(), 1, 2),

('travel', 'work', 10000, "2020-02-01", NOW(), 1, 2),
('travel', 'school', 20000, "2017-02-13", NOW(), 1, 2),
('travel', 'holiday', 4000, "2017-02-24", NOW(), 1, 2),

('travel', 'work', 100, "2020-03-01", NOW(), 1, 2),
('travel', 'school', 2000, "2020-03-13", NOW(), 1, 2),
('travel', 'holiday', 4000, "2020-03-24", NOW(), 1, 2),

('travel', 'work', 100012, "2020-04-01", NOW(), 1, 2),
('travel', 'school', 20020, "2020-04-13", NOW(), 1, 2),
('travel', 'holiday', 30, "2020-04-24", NOW(), 1, 2),

('travel', 'work', 100, "2020-05-01", NOW(), 1, 2),
('travel', 'school', 1000, "2020-05-13", NOW(), 1, 2),
('travel', 'holiday', 400, "2020-05-24", NOW(), 1, 2),

('travel', 'work', 100, "2020-06-01", NOW(), 1, 2),
('travel', 'school', 56000, "2020-06-13", NOW(), 1, 2),
('travel', 'holiday', 420, "2020-06-24", NOW(), 1, 2),

('travel', 'work', 850, "2020-07-01", NOW(), 1, 2),
('travel', 'school', 34000, "2020-07-13", NOW(), 1, 2),
('travel', 'holiday', 4560, "2020-07-24", NOW(), 1, 2),

('travel', 'work', 100, "2020-08-01", NOW(), 1, 2),
('travel', 'school', 200, "2020-08-13", NOW(), 1, 2),
('travel', 'holiday', 4000, "2020-08-24", NOW(), 1, 2),

('travel', 'work', 10340, "2020-09-01", NOW(), 1, 2),
('travel', 'school', 24300, "2020-09-13", NOW(), 1, 2),
('travel', 'holiday', 3400, "2020-09-24", NOW(), 1, 2),

('travel', 'work', 1000, "2020-10-01", NOW(), 1, 2),
('travel', 'school', 2000, "2020-10-13", NOW(), 1, 2),
('travel', 'holiday', 400, "2020-10-24", NOW(), 1, 2),

('travel', 'work', 500, "2020-11-01", NOW(), 1, 2),
('travel', 'school', 24000, "2020-11-13", NOW(), 1, 2),
('travel', 'holiday', 4970, "2020-11-24", NOW(), 1, 2),

('travel', 'work', 100, "2020-12-01", NOW(), 1, 2),
('travel', 'school', 20000, "2020-12-13", NOW(), 1, 2),
('travel', 'holiday', 4000, "2020-12-24", NOW(), 1, 2),

-- another type
('life', 'work', 30000, "2020-01-01", NOW(), 1, 2),
('life', 'school', 2000, "2020-01-13", NOW(), 1, 2),
('life', 'holiday', 10000, "2020-01-24", NOW(), 1, 2),

('life', 'work', 10000, "2020-02-01", NOW(), 1, 2),
('life', 'school', 20000, "2017-02-13", NOW(), 1, 2),
('life', 'holiday', 4000, "2017-02-24", NOW(), 1, 2),

('life', 'work', 100, "2020-03-01", NOW(), 1, 2),
('life', 'school', 2000, "2020-03-13", NOW(), 1, 2),
('life', 'holiday', 4000, "2020-03-24", NOW(), 1, 2),

('life', 'work', 100012, "2020-04-01", NOW(), 1, 2),
('life', 'school', 20020, "2020-04-13", NOW(), 1, 2),
('life', 'holiday', 30, "2020-04-24", NOW(), 1, 2),

('life', 'work', 100, "2020-05-01", NOW(), 1, 2),
('life', 'school', 1000, "2020-05-13", NOW(), 1, 2),
('life', 'holiday', 400, "2020-05-24", NOW(), 1, 2),

('life', 'work', 100, "2020-06-01", NOW(), 1, 2),
('life', 'school', 56000, "2020-06-13", NOW(), 1, 2),
('life', 'holiday', 420, "2020-06-24", NOW(), 1, 2),

('life', 'work', 850, "2020-07-01", NOW(), 1, 2),
('life', 'school', 34000, "2020-07-13", NOW(), 1, 2),
('life', 'holiday', 4560, "2020-07-24", NOW(), 1, 2),

('life', 'work', 100, "2020-08-01", NOW(), 1, 2),
('life', 'school', 200, "2020-08-13", NOW(), 1, 2),
('life', 'holiday', 4000, "2020-08-24", NOW(), 1, 2),

('life', 'work', 10340, "2020-09-01", NOW(), 1, 2),
('life', 'school', 24300, "2020-09-13", NOW(), 1, 2),
('life', 'holiday', 3400, "2020-09-24", NOW(), 1, 2),

('life', 'work', 1000, "2020-10-01", NOW(), 1, 2),
('life', 'school', 2000, "2020-10-13", NOW(), 1, 2),
('life', 'holiday', 400, "2020-10-24", NOW(), 1, 2),

('life', 'work', 500, "2020-11-01", NOW(), 1, 2),
('life', 'school', 24000, "2020-11-13", NOW(), 1, 2),
('life', 'holiday', 4970, "2020-11-24", NOW(), 1, 2),

('life', 'work', 100, "2020-12-01", NOW(), 1, 2),
('life', 'school', 20000, "2020-12-13", NOW(), 1, 2),
('life', 'holiday', 4000, "2020-12-24", NOW(), 1, 2),

-- next year for same user

('travel', 'work', 57000, "2020-01-01", NOW(), 1, 2),
('travel', 'school', 20, "2020-01-13", NOW(), 1, 2),
('travel', 'holiday', 16, "2020-01-24", NOW(), 1, 2),

('travel', 'work', 1110, "2020-02-01", NOW(), 1, 2),
('travel', 'school', 23200, "2017-02-13", NOW(), 1, 2),
('travel', 'holiday', 4500, "2017-02-24", NOW(), 1, 2),

-- another type
('life', 'work', 30000, "2020-01-01", NOW(), 1, 2),
('life', 'school', 2000, "2020-01-13", NOW(), 1, 2),
('life', 'holiday', 10000, "2020-01-24", NOW(), 1, 2),

('life', 'work', 10000, "2020-02-01", NOW(), 1, 2),
('life', 'school', 20000, "2017-02-13", NOW(), 1, 2),
('life', 'holiday', 4000, "2017-02-24", NOW(), 1, 2)

