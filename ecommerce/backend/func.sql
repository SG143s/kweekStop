getpoprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid  
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by rate desc
limit 10

getchprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by price
limit 10

getallprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid  
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid

sortpoprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid  
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by rate desc

sortchprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by price

sortexprod:
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by price desc

addcart:
    parameter:pid, uid, quant
    IF (SELECT EXISTS(SELECT 1 FROM cart WHERE username = uid AND productid = pid LIMIT 1)) THEN
        UPDATE cart SET quantity = (quant + quantity) WHERE username = uid AND productid = pid
    ELSE
        INSERT INTO cart VALUES (uid, pid, quant)
    END IF;
