import { /*json,*/ redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import NewNote, { links as newNotesLinks } from "../components/NewNote";
import NoteList, { links as noteListLinks } from '../components/NoteList';
import { getStoredNotes, storeNotes } from "../data/notes";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
//   return new Response(JSON.stringify(notes), {headers: {'Content-Type': 'application/json'}});
//   return json(notes);
}

export async function action({request}) {
  const formData = await request.formData();
  const noteData = {
    title: formData.get("title"),
    content: formData.get('content')
  }
//   const noteData = Object.fromEntries(formData);

  if(noteData.title.trim().length < 5) {
    return {message: 'Invalid title - must be at least 5 characters long.'};
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function ErrorBoundary({error}) {
  return (
    <main className="error">
      <h1>An error related to your notes occured !</h1>
      <p>{error.message}</p>
      <p>Go to <Link to="/">safety</Link> !</p>
    </main>
  )
}

export function links() {
  return [
    ...noteListLinks(),
    ...newNotesLinks(),
  ];
}