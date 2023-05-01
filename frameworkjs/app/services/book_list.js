const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function createBookList(data) {
  return await prisma.book_List.create({data});
}
