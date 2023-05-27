import { Form } from '@remix-run/react';

import styles from './RemoveList.css';

export default function RemoveList({ bookListId, redirection }) {

  function toggleModal(event) {

    // console.log("target", event.target);

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

  return (
    <div className='RemoveBookList'>
      <img src="./images/cross.svg" onClick={toggleModal} data-booklistid={bookListId} />
      <dialog className='modal-RemoveList'>
        <div>
          <p>Supprimer la liste ?</p>
          <Form method='post' action='/api/remove_liste' onSubmit={toggleModal}>
            <input type='hidden' name='redirection' value={redirection}></input>
            <input type='hidden' name='bookListId' value={bookListId}></input>
            <button className='CTA-button important'>Supprimer</button>
          </Form>
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