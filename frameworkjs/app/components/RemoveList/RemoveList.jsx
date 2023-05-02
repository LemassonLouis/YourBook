import { deleteBookList } from '../../services/book_list';
import styles from './RemoveList.css';

export default function RemoveList(bookListId) {
  return (
    <>
      <img src="./images/cross.svg" className="RemoveBookList" onClick={removeBookList} data-bookListId={bookListId} />
    </>
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

export async function removeBookList(event) {
  console.log("removeBookList", event);
  const bookListId = event.target.getAttribute("data-bookListId");

  await deleteBookList(bookListId);
}