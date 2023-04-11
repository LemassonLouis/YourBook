import { Form, Link } from "@remix-run/react";
import { authenticator } from "../services/auth.server";

import styles from '../styles/register.css';

export default function RegisterPage() {
  return (
    <main id="register">
      <h1>Enregistrement</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Mot de passe" required />
        <input type="password" name="confirmation" placeholder="Confirmation" required />
        {/* <input type="submit" name="register">Register</input> */}
        <button className="CTA-button">S'enregistrer</button>
      </Form>
      <p>Vous avez déjà un compte ? <Link to="/login" className="CTA-link">Se connecter</Link></p>
    </main>
  )
}

export async function action({ request }) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/register",
    context: { caller: "/register" },
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