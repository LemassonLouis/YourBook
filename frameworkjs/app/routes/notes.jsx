import { redirect } from '@remix-run/node';

import NewNote, { links as newNotesLinks } from "../components/NewNote";
import { getStoredNotes, storeNotes } from "../data/notes";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const noteData = {
    title: formData.get("title"),
    content: formData.get('content')
  }
//   const noteData = Object.fromEntries(formData);

  // validations...

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concact(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function links() {
  return [
    ...newNotesLinks()
  ]
}