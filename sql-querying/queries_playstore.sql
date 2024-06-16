-- Comments in SQL Start with dash-dash --
-- Find the ID
SELECT id FROM analytics
WHERE id = 1880;

-- Last updated
SELECT id, app_name FROM analytics
WHERE last_updated = '2018-08-01';

-- Number of apps in each category
SELECT cateogry, COUNT(category) FROM analytics
GROUP BY category;

-- Top 5 most-reviewed apps
SELECT app_name, reviews
FROM analytics 
ORDER BY reviews Desc LIMIT 5;

-- Reviews greater than 4.8
SELECT app_name, reviews FROM analytics
WHERE rating >= 4.8
ORDER BY reviews Desc
LIMIT 1;

-- Average rating for each category
SELECT category, AVG(rating) AS average_rating
FROM analytics
GROUP BY category
ORDER BY average_rating DESC;

-- Average rating for each catergory by highest to lowest
SELECT app_name, price, rating 
FROM analytics
WHERE rating < 3
ORDER BY price DESC
LIMIT 1;

-- Find all apps with a min install not exceeding 50
SELECT app_name, rating, min_installs FROM analytics
WHERE min_installs <= 50 AND rating IS NOT NULL
ORDER BY rating DESC;

-- All apps rated less than 3
SELECT app_name, rating, reviews
FROM analytics
WHERE rating < 3 AND reviews >= 10000;

-- Top 10 most-revoiewed apps between 10 cents and a dollar
SELECT app_name, reviews, price 
FROM analytics
WHERE price >= .1 AND price <= 1
ORDER BY reviews DESC
LIMIT 10;

-- Most out of date app
SELECT app_name, last_updated
FROM analytics
ORDER BY last_updated ASC
LIMIT 1;

-- Most expensive app
SELECT app_name, price
FROM analytics
ORDER BY price DESC
LIMIT 1;

-- Count all the reviews
SELECT count(reviews)
FROM analytics;

-- Find all the categories with more than 300 apps.
SELECT categories, COUNT(app_name) AS app_count
FROM analytics
GROUP BY categroy 
HAVING COUNT(app_name) > 300;

-- Find app with highest proportion of min_installs to reviews, 
SELECT app_name, reviews, min_installs, min_installs / reviews AS proportion
FROM analytics
WHERE min_installs >= 100000
ORDER BY proportion Desc
LIMIT 1;