import { Link, useLoaderData } from "@remix-run/react"

import RemoveList from "../RemoveList/RemoveList";

import styles from "./BookList.css";

export default function BookList({ isTitle, redirection }) {

  const bookLists = useLoaderData();

  return (
    <>
      {bookLists?.length > 0 ? bookLists.map(bookList => {
        return (
          <div className="BookList" key={bookList.id}>
            <Link to={bookList.id}>
              {isTitle ? <h1>{bookList.name}</h1> : <h2>{bookList.name}</h2>}
              <p>(nombre de livres)</p>
            </Link>
            <RemoveList bookListId={bookList.id} redirection={redirection} />
          </div>
        )
      }) : <p>Aucune listes</p>}
    </>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}