import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  datasources: {
    dbbank: {
      url: 'mysql://root:@localhost:3306/kweekstop_bank',
      provider: 'mysql',
    },
  },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const {
        payment_type,
        transaction_status,
        pdf_url,
        finish_url_redirect,
        status_code,
        transaction_time,
        gross_amount,
        order_id,
        transaction_id,
        fraud_status,
        status_message,
      } = req.body;
      await prisma.dbbank.transactions
        .create({
          data: {
            payment_type,
            transaction_status,
            pdf_url,
            finish_url_redirect,
            status_code,
            transaction_time,
            gross_amount,
            order_id,
            transaction_id,
            fraud_status,
            status_message,
          },
        })
        .then((transaction) => {
          res.status(200).json({ message: 'Success', transaction });
        })
        .catch((e) => {
          res.status(500).json({ message: 'Error', e: e.message });
        });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }