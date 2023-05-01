import { Form } from '@remix-run/react';
import { createBookList } from '../../services/book_list';

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

export async function newBookList(request) {

  const formData = await request.formData();
  const bookListData = {
    name: formData.get("name"),
  }

  await createBookList(bookListData);
}