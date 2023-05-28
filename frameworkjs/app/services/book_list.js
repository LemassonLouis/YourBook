const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function createBookList(data) {
  // const bookList = await getBookListByName(data.name);
  /*if(bookList === undefined)*/ return await prisma.book_List.create({data});
}

export async function getBookLists() {
  return await prisma.book_List.findMany();
}

export async function getBookListsByUserId(userId) {
  return await prisma.book_List.findMany({
    where: {
      ownerId: userId,
    }
  });
}

export async function deleteBookList(bookListId, ownerId) {
  return await prisma.book_List.deleteMany({
    where: {
      id: bookListId,
      ownerId,
    }
  });
}