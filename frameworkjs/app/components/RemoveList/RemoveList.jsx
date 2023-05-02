import { redirect } from '@remix-run/node';

import { deleteBookList } from '../../services/book_list';
import styles from './RemoveList.css';

export default function RemoveList({bookListId}) {

  function toggleModal(event) {

    console.log("target", event.target);

    // Get modal
    const parent = event.target.parentElement;
    const modal = parent.querySelector("dialog");

    console.log("modal", modal)
    console.log("open", modal.open)

    // toggle modal display
    if(modal.open) modal.close();
    else {
      modal.show();
      // modal.addEventListener("click", (event) => {
      //   if(event.target == modal) modal.close();
      // });
    }
  }

  return (
    <div className='RemoveBookList'>
      <img src="./images/cross.svg" onClick={toggleModal} data-booklistid={bookListId} />
      <dialog className='modal-RemoveList'>
        <div>
          <p>Supprimer la liste ?</p>
          <button className='CTA-button important' onClick={() => removeBookList(bookListId)}>Supprimer</button>
        </div>
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

// export 

export async function removeBookList(bookListId) {

  // const test = await deleteBookList(bookListId);

  // redirect("/listes");
}