import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const apiUrl = 'http://localhost:8000/products/sort/expensive';

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const sortedData = data.prods.sort((a, b) => b.discprice - a.discprice);
      prisma.$disconnect(); // Menutup koneksi Prisma
      return res.status(200).json(sortedData);
    } else {
      const errorData = await response.json();
      prisma.$disconnect(); // Menutup koneksi Prisma
      return res.status(401).json({ error: errorData.error });
    }
  } catch (error) {
    console.error(error);
    prisma.$disconnect(); // Menutup koneksi Prisma
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
