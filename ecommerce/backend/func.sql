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
    IF (SELECT EXISTS(SELECT 1 FROM cart WHERE userid = uid AND productid = pid LIMIT 1)) THEN
        UPDATE cart SET quantity = (quant + quantity) WHERE userid = uid AND productid = pid;
    ELSE
        INSERT INTO cart VALUES (uid, pid, quant);
    END IF;

cartop1:
    parameter:pid, uid
    UPDATE cart SET quantity = (1 + quantity) WHERE userid = uid AND productid = pid;

cartop2
    parameter:pid, uid
    UPDATE cart SET quantity = (quantity - 1) WHERE userid = uid AND productid = pid;

cartop3
    parameter:pid, uid
    DELETE FROM cart WHERE userid = uid AND productid = pid;

getshopown
    parameter:uid
    SELECT DISTINCT
    shop.id,
    shop.shopname,
    (
        IFNULL(
        (SELECT ROUND(AVG(rating), 2)
        FROM userreview
        WHERE productid = (
                SELECT product.id
                FROM product
                WHERE shopid = shop.id
                LIMIT 1
            )
        LIMIT 1), 0
        )
    )
    FROM
        shop
        JOIN product ON shop.id = product.shopid
        JOIN userreview ON userreview.productid = product.id
    WHERE
        shop.ownerid = uid;

getusinfo
    parameter:uid
    SELECT name, username, email FROM users where id = uid;

getusorder
    parameter:uid
SELECT DISTINCT
    orders.id,
    orders.paydetid,
    order.status,
    (
        SELECT status
        FROM paymentdetails
        WHERE paymentdetails.id = orders.paydetid
    ) AS paystatus,
    (
        SELECT total
        FROM paymentdetails
        WHERE paymentdetails.id = orders.paydetid
    ) AS total,
    orders.date
FROM 
    orders
    JOIN paymentdetails ON orders.paydetid = paymentdetails.id
WHERE orders.userid = uid
ORDER BY orders.date;

getusorderdet
    parameter:oid
SELECT DISTINCT
orderdetails.productid, product.productname, orderdetails.quantity,
(
    SELECT price
    FROM product
    WHERE product.id = orderdetails.productid
) as sprice,
(
    SELECT price
    FROM product
    WHERE product.id = orderdetails.productid
) * orderdetails.quantity as tprice,
(SELECT productimg.imagepath from productimg where productimg.productid = product.id limit 1) as img
FROM product 
join orderdetails on product.id = orderdetails.productid
join orders on orders.id = orderdetails.orderid
join productimg on productimg.productid = product.id
WHERE orders.id = oid;

TRIGGER:
    NAME: total
    EVENT: after insert on orderdetails
    QUERY:
UPDATE paymentdetails 
SET total = (
    total + (
        SELECT SUM(new.quantity * (
            SELECT price
            FROM product
            WHERE product.id = new.productid
        ))
        FROM orderdetails
        JOIN product ON orderdetails.productid = product.id
    )
)
WHERE paymentdetails.id = (
    SELECT paydetid
    FROM orders
    WHERE orders.id = new.orderid
);

getrelatecat
    parameter:pid
    ifnull(
        (
            SELECT subcatid
            FROM subcategory
            JOIN categoryprod ON subcategory.maincatid = categoryprod.categoryid
            WHERE subcategory.maincatid = (
                SELECT categoryprod.categoryid
                FROM categoryprod
                WHERE categoryprod.productid = pid
            )
        ), -1
    );

getprodbycat
    parameter:catid
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid  
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
WHERE product.id IN (
    SELECT * FROM
    (
        SELECT categoryprod.productid
        FROM categoryprod
        WHERE categoryprod.categoryid = catid
    ) AS subquery
);

getprodbyshop
    parameter:shid
SELECT DISTINCT product.id, productname, price, 
(select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
(ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
(SELECT count(review) from userreview where productid = product.id limit 1) as srev,
(SELECT imagepath from productimg where productid = product.id limit 1) as img
FROM product join userreview on product.id = userreview.productid  
join productimg on productimg.productid = product.id
join categoryprod on categoryprod.productid = product.id
join category on category.id = categoryprod.categoryid
WHERE product.shopid = shid;

getprodrev
    parameter:pid
SELECT (
    SELECT username
    FROM users
    WHERE users.id = userreview.userid
), rating, review
FROM userrating
JOIN users on userrating.userid = users.id;

checkownership
    parameter:uid, shid
SELECT EXISTS(SELECT 1 FROM shop WHERE id = shid AND ownerid = uid LIMIT 1);

changeprod
    parameter:pid, quan
UPDATE product SET stock = quan WHERE id = pid;

removeprod
    parameter:pid
DELETE FROM product WHERE id = pid;

changeprofile
    parameter:uid, nname, nusername, npassword
UPDATE users SET name = nname,
username = nusername,
password = npassword
WHERE id = uid;

