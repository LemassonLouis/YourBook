import { redirect } from "@remix-run/node";

// import { createBookList } from "~/services/book_list";
import { loggedUser } from "~/services/auth.server";
import { deleteBookList } from "~/services/book_list";

export async function action({ request }) {

  // Get logged user, if not : redirect to login
  const user = await loggedUser(request);
  if(!user) redirect('/login');

  // Get informations from form data
  const formData = await request.formData();
  const bookListId = parseInt(formData.get("bookListId"));
  const redirection = formData.get("redirection");

  // Remove a book list
  await deleteBookList(bookListId, user.id);

  // Redirect
  return redirect(redirection !== undefined ? redirection : "/listes");
}