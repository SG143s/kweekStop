// Import PrismaClient
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userid, order_id, transaction_id, payment_type, status_code, gross_amount } = req.body;

    const status = "paid";

    try {
      const createPaymentDetails = await prisma.paymentdetails.create({
        data: {
          id: transaction_id,
          total: gross_amount,
          status
        },
      });

      const createPaymentService = await prisma.paymentservice.create({
        data: {
          id: transaction_id,
          name: payment_type,
          fee: gross_amount
        },
      });

      const createdOrder = await prisma.orders.create({
        data: {
          id: order_id,
          userid,
          paydetid: transaction_id,
          payserviceid: transaction_id,
        },
      });

      res.status(200).json({ message: 'Success', order: createdOrder });
    } catch (error) {
      res.status(500).json({ message: 'Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
