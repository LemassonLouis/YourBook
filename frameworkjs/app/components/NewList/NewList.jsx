import { Form } from '@remix-run/react';

import styles from './NewList.css';

export default function NewList() {

  function toggleModal(event) {

    // Get modal
    const parent = event.target.parentElement;
    const modal = parent.querySelector("dialog");

    // toggle modal display
    if(modal.open) modal.close();
    else {
      modal.show();
      modal.addEventListener("click", (event) => {
        if(event.target == modal) modal.close();
      });
    }
  }

  return (
    <div className='NewList'>
      <button className='CTA-button' onClick={toggleModal}>Créer une nouvelle liste</button>
      <dialog className='modal-NewList'>
        <Form method='post'>
            <input type='text' placeholder='Nom de la liste' required className="CTA-input"></input>
            <button className='CTA-button'>Créer</button>
        </Form>
      </dialog>
    </div>
  )
}

export async function action({ request }) {
  
};

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}