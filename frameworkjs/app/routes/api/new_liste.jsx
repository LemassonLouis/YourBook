import { redirect } from "@remix-run/node";

import { loggedUser } from "~/services/auth.server";
import { createBookList } from "~/services/book_list";

export async function action({ request }) {

  // Get redirection
  const url = new URL(request.url)
  const redirection = url.searchParams.get('redirection');

  // Get logged user, if not : redirect to login
  const user = await loggedUser(request);
  if(!user) return redirect(!redirection ? '/login' : `/login?redirection=${redirection}`);

  // Get informations from form data
  const formData = await request.formData();
  const bookListData = {
    name: formData.get("name"),
    ownerId: user.id
  }

  // Create a book list
  await createBookList(bookListData);

  // Redirect
  return redirect(!redirection ? "/listes" : redirection);
}