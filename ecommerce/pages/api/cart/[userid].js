const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { userid } = req.query; 

        const data = await prisma.$queryRaw`
            SELECT *
            FROM cart
            JOIN product ON product.id = cart.productid
            WHERE cart.userid = ${userid};
        `;
        
        if (data.length > 0) {
          return res.status(200).json(data);
        } else {
          return res.status(401).json({ error: 'Invalid userid' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        await prisma.$disconnect();
      }
  }