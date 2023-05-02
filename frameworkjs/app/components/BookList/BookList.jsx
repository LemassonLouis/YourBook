import { Link, useLoaderData } from "@remix-run/react"
import { redirect } from "@remix-run/node";

import { loggedUser } from "../../services/auth.server";
import { getBookListsById, getBookListsByUserId } from "../../services/book_list";
import RemoveList from "../RemoveList/RemoveList";

import styles from "./BookList.css";

export default function BookList() {

  const bookLists = useLoaderData();

  return (
    <div className="BookLists">
      {bookLists.length < 1 ? <p>Aucune listes</p> : bookLists.map(bookList => {
        return (
          <div className="BookList">
            <Link to={bookList.id}>
              {bookLists.length == 1 ? <h1>{bookList.name}</h1> : <h2>{bookList.name}</h2>}
              <p>(nombre de livres)</p>
            </Link>
            <RemoveList RemoveList={bookList.id} />
          </div>
        )
      })}
    </div>
  )
}

export async function loader({request}, bookListId = undefined) {

  const user = await loggedUser(request);
  if(!user) redirect('/register');
  
  if(bookListId) var bookLists = await getBookListsByUserId(user.id);
  else var bookLists = await getBookListsById(bookListId);
  
  return bookLists;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}