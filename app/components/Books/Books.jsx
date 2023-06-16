import styles from "./Books.css";


export default function Books({ books }) {
  return (
    <div className="Books">
      {books.map(book => {
        return (
          <div key={book.key} className="Book">
            <h2>{book.title}</h2>
          </div>
        )
      })}
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