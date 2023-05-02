import { Link, useLoaderData } from "@remix-run/react";
import { redirect } from '@remix-run/node';

import NewList, { newBookList } from "../components/NewList/NewList";
import { getBookListsByUserId } from "../services/book_list";

import styles from '../styles/lists.css';
import { loggedUser } from "../services/auth.server";
import RemoveList from "../components/RemoveList/RemoveList";


export default function Lists() {

  const bookLists = useLoaderData();

  return (
    <main id="lists">
      <h1>Mes listes</h1>
      <NewList />
      <div className="BookLists">
        {bookLists.length < 1 ? <p>Aucune listes</p> : bookLists.map(bookList => {
          return (
            <div className="BookList">
              <Link to={bookList.id}>
                <h2>{bookList.name}</h2>
                <p>(nombre de livres)</p>
              </Link>
              <RemoveList RemoveList={bookList.id} />
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