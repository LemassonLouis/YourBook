import { Form } from '@remix-run/react';
import { redirect } from '@remix-run/node';

import { loggedUser } from '../../services/auth.server';
import { createBookList } from '../../services/book_list';

import styles from './NewList.css';

export default function NewList({redirection}) {

  function toggleModal(event) {

    console.log("event", event)
  
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
    <div className='NewList'>
      <button className='CTA-button' onClick={toggleModal}>Créer une nouvelle liste</button>
      <dialog className='modal-NewList'>
        <Form method='post' action="/api/new_liste">
          <input type='hidden' name='redirection' value={redirection}></input>
          <input type='text' className="CTA-input" name='name' placeholder='Nom de la liste' required></input>
          <button className='CTA-button'>Créer</button>
        </Form>
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