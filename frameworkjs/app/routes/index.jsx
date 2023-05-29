import { Link, useLoaderData } from "@remix-run/react";
import { getBooks2 } from "../services/api";

import styles from '../styles/main.css';
import Books from "../components/Books/Books";

export default function Index() {
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const inputValue = event.target.input.value;
  //   const books = await getBooks(inputValue);
  //   const outputDiv = document.getElementById("output");
  //   outputDiv.innerHTML = "";
  //   // Les livres sont filtrés avec la méthode filter qui permet de garder seulement les éléments pour lesquels la fonction de filtrage renvoie true. 
  //   // Seuls les livres ayant un titre et un auteur sont gardés
  //   books
  //     .filter((book) => book.author_name && book.title)
  //     .forEach((book) => {
  //       const id = book.edition_key ? book.edition_key[0] : "ID non disponible";
  //       const title = book.title ? book.title : 'Titre non disponible';
  //       const author = book.author_name ? book.author_name.join(", ") : 'Auteur non disponible';
  //       // on utilise la méthode slice(0, 3) qui permet de récupérer les 3 premiers éléments d'un tableau
  //       const genre = book.subject ? book.subject.slice(0, 3).map((subject) => subject.replace(/\s/g, '-')).join(", ") : 'Genre non disponible';
  //       const publisher = book.publisher ? book.publisher[0] : "Éditeur non disponible";
  //       outputDiv.innerHTML += `
  //         <div class='display_data'>
  //           ${
  //             book.cover_i
  //               ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">`
  //               : "Couverture indisponible"
  //           }
  //           <div>
  //             <p><span class='book_details'>ID :</span> ${id}</p>
  //             <p><span class='book_details'>Titre :</span> ${title}</p>
  //             <p><span class='book_details'>Auteur :</span> ${author}</p>
  //             <p><span class='book_details'>Genre :</span> ${genre}</p>
  //             <p><span class='book_details'>Éditeur :</span> ${publisher}</p>
  //             <p><span class='book_details'>Date :</span> ${book.first_publish_year}</p>
  //             <br><br>
  //             <p><a href='/book_details?id=${id}'>Voir les détails du livre</a></p>
  //           </div>
  //         </div>
  //         <br><br>
  //       `;
  //     });
  // }

  const books = useLoaderData();
  console.log("book", books);

  function handle(event) {
    console.log("change");
  }

  return (
    <main>
      <input type="search" id="search" placeholder="Rechercher" onChange={handle}></input>
      <Books books={books} />
    </main>
  );
}

export async function loader() {
  return await getBooks2("q=*&limit=100");
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}