const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { username, password } = req.body; 
    
    const user = await prisma.users.findFirst({
      where: {
        username,
        password,
      },
    });
    
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}

// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   try {
//     // const { luname, lpass } = req.body;
//     const { username, password } = req.body;
//     const luname = username;
//     const lpass = password;

//     const apiUrl = 'http://localhost:8000/login';

//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       body: JSON.stringify({
//         "luname": "bmulrooney8",
//         "lpass": "MoQ7tnc7"
//     }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("datarrrrrrrr:", data.profile)
//       return res.status(200).json(data);
//     } else {
//       const errorData = await response.json();
//       return res.status(401).json({ error: errorData.error });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


