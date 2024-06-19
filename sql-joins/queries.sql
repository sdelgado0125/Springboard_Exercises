-- write your queries here

-- Join the two tables so that every column and record appears, regardless of if there is not an owner_id .
SELECT * FROM owners o FULL OUTER JOIN vehicles v ON o.id=v.owner_id;

-- Count the number of cars for each owner. Display the owners first_name , last_name and count of vehicles
SELECT first_name, last_name, 
  COUNT(owner_id) FROM owners o 
  JOIN vehicles v on o.id=v.owner_id 
  GROUP BY (first_name, last_name) 
ORDER BY first_name;


-- Count the number of cars for each owner and display the average price for each of the cars as integers.
SELECT 
  first_name, last_name, 
  ROUND(AVG(price)) as average_price, 
  COUNT(owner_id) 
FROM owners o 
JOIN vehicles v on o.id=v.owner_id 
GROUP BY 
  (first_name, last_name) 
HAVING 
  COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000 
ORDER BY first_name DESC;