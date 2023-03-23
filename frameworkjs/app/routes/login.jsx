import { Form, Link } from "@remix-run/react";
import { authenticator } from '~/services/auth.server';

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <Link to="/">Forgot your password ?</Link>
        {/* <input type="submit" name="login">Login</input> */}
        <button>Login</button>
      </Form>
      <p>No account yet ? <Link to="/register">Register</Link></p>
    </main>
  )
}

export async function action({ request }) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};