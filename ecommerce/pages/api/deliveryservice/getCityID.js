import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('https://api.rajaongkir.com/starter/city', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Key': '376ef3362b6b3ee67aff4bc0641f4aad', 
        },
      });
      const data = await response.json();

      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
