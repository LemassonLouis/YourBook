import { redirect } from "@remix-run/node";

import { createBookList } from "~/services/book_list";
import { loggedUser } from "~/services/auth.server";

export async function action({ request }) {

  // Get logged user, if not : redirect to login
  const user = await loggedUser(request);
  if(!user) redirect('/login');

  // Get informations from form data
  const formData = await request.formData();
  const bookListData = {
    name: formData.get("name"),
    ownerId: user.id
  }
  const redirection = formData.get("redirection");

  // Create a book list
  await createBookList(bookListData);

  // Redirect
  return redirect(redirection !== undefined ? redirection : "/listes");
}