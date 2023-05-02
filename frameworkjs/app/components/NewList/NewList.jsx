import { Form } from '@remix-run/react';
import { createBookList } from '../../services/book_list';

import styles from './NewList.css';
import { redirect } from '@remix-run/node';
import { loggedUser } from '../../services/auth.server';

export default function NewList() {
  return (
    <div className='NewList'>
      <button className='CTA-button' onClick={toggleModal}>Créer une nouvelle liste</button>
      <dialog className='modal-NewList' onBlur={() => console.log("onblur")} onFocus={(e) => console.log("onfocusout", e)}>
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

export async function newBookList(request) {

  const user = await loggedUser(request);
  if(!user) redirect('/register');

  const formData = await request.formData();
  const bookListData = {
    name: formData.get("name"),
    ownerId: user.id
  }

  await createBookList(bookListData);
}