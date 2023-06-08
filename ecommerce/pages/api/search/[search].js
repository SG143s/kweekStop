const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { search } = req.query; 

        const products = await prisma.product.findMany({
          where: {
            productname: {
              contains: search,
            },
          },
          include: {
            categoryprod: {
              include: {
                category: true,
              },
            },
            productimg: true,
          },
        });
        
        console.log(products);
        
        if (products.length > 0) {
            console.log("cari cari: ", products)
          return res.status(200).json(products);
        } else {
          return res.status(401).json({ error: 'Invalid name' });
        }
      } catch (error) {
        console.error('Error executing raw query:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      } finally {
        await prisma.$disconnect();
      }
  }