import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { createHmac } from 'node:crypto';
import { sessionStorage } from "~/services/session.server";
import { createUser, getUserByEmail } from "./user";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form, context }) => {

    const email = form.get("email");
    const password = form.get("password");
    const confirmation = form.get("confirmation");
    const hashedPassword = hash(password);

    const callFrom = context.caller;

    if (callFrom == "/register") {

      if (password !== confirmation) throw ("Password and confirmation aren't egal.");

      const userData = {
        email,
        password: hashedPassword,
      }

      var user = await createUser(userData);
    }
    else {
      var user = await login(email, hashedPassword);
    }

    return user;
  }),

  "user-pass"
);

export function hash(password) {
  return createHmac('sha256', "toto").update(password).digest('hex');
}

export async function login(email, password) {
  const user = await getUserByEmail(email);

  if (!user || user?.password != password) throw ("No user or password valid");

  return user;
}

export async function isLogged(request) {
  const user = await loggedUser(request);
  if (!user) return false;
  else return true;
}

export async function loggedUser(request) {
  const user = await authenticator.isAuthenticated(request);
  return user;
}

export async function logout(request) {
  await authenticator.logout(request, { redirectTo: "/logout" });
}