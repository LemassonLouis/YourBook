import { Link } from "@remix-run/react"

import RemoveList from "../RemoveList/RemoveList";

import styles from "./BookList.css";


export default function BookList({ bookLists, isTitle, removeRedirection }) {
  return (
    <div className="BookLists">
      {bookLists?.length > 0 ? bookLists.map(bookList => {
        return (
          <div key={bookList.id} className="BookList">
            <Link to={bookList.name}>
              {isTitle ? <h1>{bookList.name}</h1> : <h2>{bookList.name}</h2>}
              <p>(nombre de livres)</p>
            </Link>
            <RemoveList bookListId={bookList.id} redirection={removeRedirection} />
          </div>
        )
      }) : <p>Aucune listes</p>}
    </div>
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