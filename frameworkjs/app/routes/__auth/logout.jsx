import { Link, useLoaderData } from '@remix-run/react';
import { isLogged, logout } from '~/services/auth.server';

import styles from '~/styles/logout.css';

export default function Logout() {
  const logged = useLoaderData();

  return (
    <main id="logout">
      <h1>{logged ? 'Déconnexion...' : 'Vous avez été déconnecté.'}</h1>
      <Link to="/" className="CTA-button">Retourner aux livres</Link>
    </main>
  )
}

export async function loader({ request }) {
  const logged = await isLogged(request);
  if(logged) await logout(request);
  return logged;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}