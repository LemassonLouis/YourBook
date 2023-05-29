import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator } from '~/services/auth.server';

import styles from '~/styles/login.css';

export default function LoginPage() {
  const { redirection } = useLoaderData();

  return (
    <main id="login">
      <h1>Connexion</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required className="CTA-input"/>
        <input type="password" name="password" placeholder="Mot de passe" required className="CTA-input"/>
        <Link to="/" className="CTA-link">Mot de passe oublié ?</Link>
        {/* <input type="submit" name="login">Login</input> */}
        <button className="CTA-button">Connexion</button>
      </Form>
      <p>Pas encore de compte ? <Link to={!redirection ? "/register" : '/register?redirection='+redirection} className="CTA-link">S'enregistrer</Link></p>
    </main>
  )
}

export async function action({ request }) {
  const url = new URL(request.url)
  const redirection = url.searchParams.get('redirection');

  return await authenticator.authenticate("user-pass", request, {
    successRedirect: !redirection ? '/' : `/${redirection}`,
    failureRedirect: !redirection ? '/login' : `/login?redirection=${redirection}`,
    context: { caller: "/login" },
  });
};

export async function loader({ request }) {
  const url = new URL(request.url)
  const redirection = url.searchParams.get('redirection');
  return { redirection };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}