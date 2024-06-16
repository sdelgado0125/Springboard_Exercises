--Adding product: chair
INSERT INTO products(name, price, can_be_returned)
VALUES('chair', 44.00, FALSE);

--Adding product: stool
INSERT INTO products(name, price, can_be_returned)
VALUES('stool', 25.99, TRUE);

--Adding product: table
INSERT INTO products(name, price, can_be_returned)
VALUES('table', 124.00, FALSE);

--Displaying table
SELECT *
FROM products;

--Displaying names
SELECT name
FROM products; 

--Display names and prices
SELECT name, price
FROM products;

--New item
INSERT INTO products(name, price, can_be_returned)
VALUE('Playstation 5', 449.00, TRUE)

--Displays can_be_returned
SELECT can_be_returned
FROM products
WHERE can_be_returned = TRUE;

--Products less than 44.00
SELECT name
FROM products
WHERE price < 44.00;

--Displays Price between 22.50 and 99.99
SELECT price
FROM products
WHERE price BETWEEN 22.50 AND 99.99;

--$20 off SALE
UPDATE products
SET price = price - 20;

--Sold Out Items
DELETE FROM products
WHERE price < 25;

-- Increase prices by $20
UPDATE products
SET price = price + 20;

-- Update all products to be returnable
UPDATE products
SET can_be_returned = TRUE;