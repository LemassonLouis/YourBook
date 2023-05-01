import { getBookLists } from "../services/book_list";


export default function Lists() {

  return (
    <main>
      <h1>Mes listes</h1>
      <NewList />
    </main>
  )
}

export async function action({ request }) {
  await newBookList(request);

  return redirect("/listes");
}