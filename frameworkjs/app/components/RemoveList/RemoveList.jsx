import { redirect } from '@remix-run/node';
import { deleteBookList } from '../../services/book_list';
import styles from './RemoveList.css';

export default function RemoveList(bookListId) {
  return (
    <div className='RemoveBookList'>
      <img src="./images/cross.svg" onClick={toggleModal} data-bookListId={bookListId} />
      <dialog className='modal-RemoveList'>
        <p>Supprimer la liste ?</p>
        <button className='CTA-button important' onClick={removeBookList}></button>
      </dialog>
    </div>
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

export function toggleModal(event) {

  // Get modal
  const parent = event.target.parentElement;
  const modal = parent.querySelector("dialog");

  // toggle modal display
  if(modal.open) modal.close();
  else {
    modal.show();
    // modal.addEventListener("click", (event) => {
    //   if(event.target == modal) modal.close();
    // });
  }
}

export async function removeBookList(event) {
  console.log("removeBookList", event);
  const bookListId = event.target.getAttribute("data-bookListId");

  await deleteBookList(bookListId);

  redirect("/listes");
}