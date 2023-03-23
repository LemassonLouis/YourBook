const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}
