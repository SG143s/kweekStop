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
    const { username, password } = req.body; // Assuming you are using POST request to send the form data
    
    // Query the database to check if the username and userpassword match any records
    const user = await prisma.users.findFirst({
      where: {
        username,
        password,
      },
    });
    
    if (user) {
      // Username and password match, proceed with further logic
      // You can perform additional operations or return a success response
      return res.status(200).json(user);
    } else {
      // Username and password do not match
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}

