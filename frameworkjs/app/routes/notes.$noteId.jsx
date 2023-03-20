import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from '../data/notes';
import styles from "../styles/note-details.css";

export default function NoteDetailPage() {
  const note = useLoaderData();

  return (
    <main id="note-details">
      <header>
        <nav>
            <Link to="/notes">Back to notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  )
}

export async function loader({params}) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const seletedNote = notes.find(note => note.id === noteId);

  if(!selectedNote) {
    throw json(
      { message: 'Could not find note for id ' + noteId },
      { status: 404 }
    )
  }

  return seletedNote;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}