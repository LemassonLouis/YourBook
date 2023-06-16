export async function getBooks(query) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    console.log("Data from getBooks:", data);
    const books = data.docs;
    return books;
  } catch (error) {
    console.error(error);
  }
}

export async function getBookDetails({params}) {
  const {id} = params;
  const url = `https://openlibrary.org/api/books?bibkeys=OLID:${id}&jscmd=data&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  const book = data[`OLID:${id}`];
  return {book};
}

export async function getBooks2(query) {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?${query}`);
    const data = await response.json();
    // console.log("data", data);
    return data.docs;
  }
  catch (error) {
    console.error(error);
  }
}