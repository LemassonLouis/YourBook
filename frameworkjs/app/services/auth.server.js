import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { createHmac } from 'node:crypto';
import { sessionStorage } from "~/services/session.server";
import { createUser, getUserByEmail } from "./user";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form, context }) => {

    console.log("context", context);

    const email = form.get("email");
    const password = form.get("password");
    const hashedPassword = hash(password);
    console.log("hashed password", hashedPassword);

    const callFrom = context.caller;
    console.log("call from", callFrom);
    console.log(callFrom == "/register", callFrom === "/register");
    console.log("is ok ?");

    if(callFrom == "/register") {

      console.log("password", password, "confimration", confirmation);
      console.log("password !== confirmation", password !== confirmation);

      if(password !== confirmation) throw("Password and confirmation aren't egal.");

      const userData = {
        email,
        password: hashedPassword,
      }

      var user = await createUser(userData);
    }
    else {
      var user = await login(email, hashedPassword);
    }

    console.log("user", user);
    console.log("the end");

    return user;
  }),

  "user-pass"
);

export async function login(email, password) {
  const user = await getUserByEmail(email);

  if(!user || user?.password != password) throw("No user or password valid");

  return user;
}

export function hash(password) {
  return createHmac('sha256', "toto").update(password).digest('hex');
}