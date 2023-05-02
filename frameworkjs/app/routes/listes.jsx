import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { loggedUser } from '../services/auth.server';
import { getBookListsByUserId } from '../services/book_list';
import NewList, { newBookList } from "../components/NewList/NewList";
import BookList from '../components/BookList/BookList';

import styles from '../styles/lists.css';
import { links as bookListLinks } from '../components/BookList/BookList';

export default function Lists() {

  const bookLists = useLoaderData();

  return (
    <main id="lists">
      <h1>Mes listes</h1>
      <NewList />
      <div className="BookLists">
        <BookList isTitle={false} />
      </div>
    </main>
  )
}

export async function loader({request}) {

  const user = await loggedUser(request);
  if(!user) redirect('/register');

  return await getBookListsByUserId(user.id);
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
    },
    ...bookListLinks()
  ]
}