const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function createUser(data) {
  return await prisma.user.create({data});
}

// export async function getUsers() {
//   return await prisma.user.findMany();
// }

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}

// export async function getUserById(id) {
//   return await prisma.user.findUnique({
//     where: {
//       id
//     }
//   })
// }