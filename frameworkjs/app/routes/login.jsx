import { Form, Link } from "@remix-run/react";
import { authenticator } from '~/services/auth.server';

import styles from '~/styles/login.css';

export default function LoginPage() {
  return (
    <main id="login">
      <h1>Login</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Mot de passe" required />
        <Link to="/">Mot de passe oublié ?</Link>
        {/* <input type="submit" name="login">Login</input> */}
        <button>Connexion</button>
      </Form>
      <p>Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
    </main>
  )
}

export async function action({ request }) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    context: { caller: "/login" },
  });
};

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}