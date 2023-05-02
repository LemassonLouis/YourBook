import { useLoaderData } from "@remix-run/react";
import { redirect } from '@remix-run/node';

import NewList, { newBookList } from "../components/NewList/NewList";
import { getBookListsByUserId } from "../services/book_list";

import styles from '../styles/lists.css';
import { loggedUser } from "../services/auth.server";


export default function Lists() {

  const bookLists = useLoaderData();

  return (
    <main>
      <h1>Mes listes</h1>
      <NewList />
      <div className="BookLists">
        {bookLists.length < 1 ? <p>Aucune listes</p> : bookLists.map(bookList => {
          return (
            <div className="BookList">
              <h2>{bookList.name}</h2>
              <p>(nombre de livres)</p>
              <button>(croix_suppr)</button>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export async function loader({request}) {

  const user = await loggedUser(request);
  if(!user) redirect('/register');

  const bookLists = await getBookListsByUserId(user.id);

  return bookLists;
}

export async function action({ request }) {
  await newBookList(request);

  return redirect("/listes");
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}