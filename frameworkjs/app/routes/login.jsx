import { Form, Link } from "@remix-run/react";
import { authenticator } from '~/services/auth.server';

import styles from '~/styles/login.css';

export default function LoginPage() {
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
      <p>Pas encore de compte ? <Link to="/register" className="CTA-link">S'enregistrer</Link></p>
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