import { Link } from "@remix-run/react";

import styles from "../styles/note-details.css";

export default function NoteDetailPage() {
  return (
    <main id="note-details">
      <header>
        <nav>
            <Link to="/notes">Back to notes</Link>
        </nav>
        <h1>Note title</h1>
      </header>
      <p id="note-details-content">Note content</p>
    </main>
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