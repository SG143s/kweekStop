const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { search } = req.query; 

        const data = await prisma.$queryRaw`
            SELECT DISTINCT product.id, productname, price, 
            (select name from category where category.id = (select categoryid from categoryprod where productid = product.id limit 1) limit 1) as cat, 
            (ifnull((SELECT ROUND(AVG(rating), 2) from userreview where productid = product.id limit 1), 0)) as rate, 
            (SELECT count(review) from userreview where productid = product.id limit 1) as srev,
            (SELECT imagepath from productimg where productid = product.id limit 1) as img
            FROM product join userreview on product.id = userreview.productid  
            join productimg on productimg.productid = product.id
            join categoryprod on categoryprod.productid = product.id
            join category on category.id = categoryprod.categoryid
            where productname like '%${search}%';
        `;
        
        if (data.length > 0) {
            console.log("cari cari: ", data)
          return res.status(200).json(data);
        } else {
          return res.status(401).json({ error: 'Invalid name' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        await prisma.$disconnect();
      }
  }