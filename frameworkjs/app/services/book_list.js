const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// CREATE
export async function createBookList(data) {
  const bookList = await getBookListByName(data.name, data.ownerId);
  if(bookList.length === 0) return await prisma.book_List.create({data});
}


// READ
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

export async function getBookListByName(bookListName, ownerId) {
  return await prisma.book_List.findMany({
    where: {
      name: bookListName,
      ownerId
    }
  })
}


// DELETE
export async function deleteBookList(bookListId, ownerId) {
  return await prisma.book_List.deleteMany({
    where: {
      id: bookListId,
      ownerId,
    }
  });
}