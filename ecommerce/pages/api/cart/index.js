import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { amount, productdata, userData } = req.body;
        const userid = userData.id;
        const productid = productdata.productid;
        const quantity = amount;

    const cartItem = await prisma.cart.create({
        data: {
            userid,
            productid,
            quantity,
        },
    });

      return res.status(200).json(cartItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  }

  return res.status(404).json({ error: 'Not Found' });
}
