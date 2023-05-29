import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { loggedUser } from "~/services/auth.server";
import { getBookListByName } from "~/services/book_list";

import Arborescence from "~/components/Arborescence/Arborescence";
import BookList from "~/components/BookList/BookList";

// import styles from "~/styles/note-details.css";
import { links as bookListLinks } from '~/components/BookList/BookList';


export default function BookListDetail() {
  const bookList = useLoaderData();

  return (
    <main>
      <h1>{bookList[0].name}</h1>
      <Arborescence path={`listes/${bookList[0].name}`} />
      {/* <BookList bookLists={bookList} isTitle={true} removeRedirection="/listes" /> */}
      {/* Listes livres */}
    </main>
  )
}

export async function loader({request, params}) {

  // Get logged user, if not : redirect to login
  const user = await loggedUser(request);
  if(!user) return redirect('/login');

  // Get book list
  const bookList = await getBookListByName(params.listeName, user.id);
  if(bookList.length != 1) return redirect("/404");

  return bookList;
}

export function links() {
  return [
    ...bookListLinks()
  ]
}