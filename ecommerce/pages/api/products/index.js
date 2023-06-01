// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// export default async function handler(req, res) {
//     const data = await prisma.product.findMany()
//     return res.status(200).json(data)
// }

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const data = await prisma.$queryRaw`
      SELECT *
      FROM product
      JOIN categoryprod ON product.id = categoryprod.productid
      JOIN category ON category.id = categoryprod.categoryid;
    `;

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
