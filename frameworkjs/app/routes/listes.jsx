import { Link, useLoaderData } from "@remix-run/react";
import { redirect } from '@remix-run/node';

import NewList, { newBookList } from "../components/NewList/NewList";
import { getBookListsByUserId } from "../services/book_list";

import styles from '../styles/lists.css';
import { loggedUser } from "../services/auth.server";
import RemoveList from "../components/RemoveList/RemoveList";
import BookList from "../components/BookList/BookList";


export default function Lists() {
  return (
    <main id="lists">
      <h1>Mes listes</h1>
      <NewList />
      <div className="BookLists">
        <BookList />
      </div>
    </main>
  )
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