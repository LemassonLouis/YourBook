const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Louis',
      email: 'louis@prisma.io',
      password: 'louis.prisma.io'
    },
  })

  const allUsers = await prisma.user.findMany();
  console.log("all users", allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })