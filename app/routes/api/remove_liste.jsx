import { redirect } from "@remix-run/node";

import { loggedUser } from "~/services/auth.server";
import { deleteBookList } from "~/services/book_list";

export async function action({ request }) {

  // Get redirection
  const url = new URL(request.url)
  const redirection = url.searchParams.get('redirection');

  // Get logged user, if not : redirect to login
  const user = await loggedUser(request);
  if(!user) return redirect(!redirection ? '/login' : `/login?redirection=${redirection}`);

  // Get informations from form data
  const formData = await request.formData();
  const bookListId = parseInt(formData.get("bookListId"));

  // Remove a book list
  await deleteBookList(bookListId, user.id);

  // Redirect
  return redirect(!redirection ? "/listes" : redirection);
}