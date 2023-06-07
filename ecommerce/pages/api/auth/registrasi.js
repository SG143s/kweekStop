import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Fungsi untuk menghasilkan string acak dengan panjang tertentu
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  // Fungsi untuk menghasilkan angka acak dengan jumlah digit tertentu
function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, username, password } = req.body;

      // Lakukan manipulasi data
      const id = generateRandomString(7); // Membuat string acak dengan panjang 7 karakter
      const email = generateRandomString(4) + "@" + generateRandomString(3) + ".wrpl";
      const shopowner = false;
      const saldo = 0;
      const imagepath = './anonymousprofile';

      const newUser = await prisma.users.create({
        data: {
          id,
          name,
          username,
          email,
          password,
          shopowner,
          saldo,
          imagepath,
        },
      });

      return res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  }

  return res.status(404).json({ error: 'Not Found' });
}
