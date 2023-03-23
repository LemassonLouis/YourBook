import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { createHmac } from 'node:crypto';
import { sessionStorage } from "~/services/session.server";
import { getUserByEmail } from "./user";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {

    let email = form.get("email");
    let password = form.get("password");

    const hashedPassword = hash(password);
    const user = await login(email, hashedPassword);

    return user;
  }),

  "user-pass"
);

export async function login(email, password) {
  const user = await getUserByEmail(email);

  if(!user) throw("No user find with this email");
  if(user.password != password) throw("Invalid password");

  return user;
}

export function hash(password) {
  return createHmac('sha256', "toto").update(password).digest('hex');
}