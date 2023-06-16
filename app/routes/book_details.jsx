import { useLoaderData } from '@remix-run/react';

export default function BookDetails() {
  const { book } = useLoaderData();

  return (
    <main>
      <h1>Détails du livre</h1>
      <br />
      {book ? (
        <div>
          <p><span class='book_details'>Titre :</span> {book.title}</p>
          <p><span class='book_details'>Auteur :</span> {book.authors && book.authors.map(author => author.name).join(', ')}</p>
          <p><span class='book_details'>Date de publication :</span> {book.publish_date}</p>
          <p><span class='book_details'>Genre :</span> {book.subject}</p>
          <p><span class='book_details'>Nombre de pages :</span> {book.number_of_pages}</p>
          <p><span class='book_details'>Editeur :</span> {book.publishers && book.publishers.map(publisher => publisher.name).join(', ')}</p>
          <p><span class='book_details'>Couverture :</span></p>
          {book.cover ? <img src={book.cover.medium} alt="couverture du livre" /> : "Couverture indisponible"}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}