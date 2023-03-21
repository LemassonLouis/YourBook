import { Form, Link } from "@remix-run/react";

export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="confirmation" placeholder="Confirmation" required />
        {/* <input type="submit" name="register">Register</input> */}
        <button>Register</button>
      </Form>
      <p>Already have an account ? <Link to="/login">Login</Link></p>
    </main>
  )
}