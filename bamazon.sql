create database bamazon;

use bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DOUBLE(16,2) DEFAULT '0.00' NOT NULL,
    stock_quantity INT DEFAULT '0' NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goat Stuffed Animal", "Kohl's", "25.99", "45")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Best Buy", "279.00", "168")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Korean Face Wash", "Amazon", "13.48", "40")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Yeti Microphone", "Best Buy", "144.99", "8")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Headphones", "Best Buy", "85.99", "100")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 8 Glitter Case", "Kohl's", "14.99", "6")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hampton Barbell Pad", "Amazon", "13.98", "20")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pink Teddy Bear", "Kohl's", "21.99", "40")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purple Hardcover Notebook", "Amazon", "12.99", "200")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hello Kitty Bathrobe", "Amazon", "50.99", "3")
;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Slam Worldwide Snapback", "Amazon", "19.99", "10")
;

UPDATE products
SET department_name = "Technology"
WHERE item_id = 5;

UPDATE products
SET department_name = "Technology"
WHERE item_id = 4;

UPDATE products
SET department_name = "Technology"
WHERE item_id = 2;

UPDATE products
SET department_name = "Toys"
WHERE item_id = 1;

UPDATE products
SET department_name = "Toys"
WHERE item_id = 8;

UPDATE products
SET department_name = "Accessories"
WHERE item_id = 6;

UPDATE products
SET department_name = "Fitness"
WHERE item_id = 7;

UPDATE products
SET department_name = "Apparel"
WHERE item_id = 10;

UPDATE products
SET department_name = "Apparel"
WHERE item_id = 11;

UPDATE products
SET department_name = "Bath"
WHERE item_id = 3;

UPDATE products
SET department_name = "Stationery"
WHERE item_id = 9;