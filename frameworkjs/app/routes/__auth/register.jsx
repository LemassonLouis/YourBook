import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator } from '~/services/auth.server';

import styles from '~/styles/register.css';

export default function RegisterPage() {
  const { redirection } = useLoaderData();

  return (
    <main id="register">
      <h1>Enregistrement</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required className="CTA-input"/>
        <input type="password" name="password" placeholder="Mot de passe" required className="CTA-input"/>
        <input type="password" name="confirmation" placeholder="Confirmation" required className="CTA-input"/>
        {/* <input type="submit" name="register">Register</input> */}
        <button className="CTA-button">S'enregistrer</button>
      </Form>
      <p>Vous avez déjà un compte ? <Link to={!redirection ? "/login" : '/login?redirection='+redirection} className="CTA-link">Se connecter</Link></p>
    </main>
  )
}

export async function action({ request }) {
  const url = new URL(request.url)
  const redirection = url.searchParams.get('redirection');

  return await authenticator.authenticate("user-pass", request, {
    successRedirect: !redirection ? '/' : `/${redirection}`,
    failureRedirect: !redirection ? '/register' : `/regiser?redirection=${redirection}`,
    context: { caller: "/register" },
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