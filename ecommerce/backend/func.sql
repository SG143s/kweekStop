SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev
FROM product join userreview on product.id = userreview.productid  
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by rate desc
limit 10

SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev
FROM product join userreview on product.id = userreview.productid  
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
order by price
limit 10