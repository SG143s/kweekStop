const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { id } = req.query; 

        const data = await prisma.$queryRaw`
            SELECT *
            FROM product
            JOIN categoryprod ON product.id = categoryprod.productid
            JOIN category ON category.id = categoryprod.categoryid
            WHERE product.id = ${id};
        `;
        
        if (data.length > 0) {
          return res.status(200).json(data[0]);
        } else {
          return res.status(401).json({ error: 'Invalid id' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        await prisma.$disconnect();
      }
  }