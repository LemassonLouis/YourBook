import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
// import { User } from "../../prisma/"
// import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

// const prisma = new PrismaClient();
// const User = prisma.user;

export let authenticator = new Authenticator<User>(sessionStorage);

// console.log("authenticator", authenticator)

authenticator

// authenticator.use(
//   new FormStrategy(async ({ form }) => {

//     let email = form.get("email");
//     let password = form.get("password");

//     // let hashedPassword = await hash(password);

//     let user = await login(email, password);

//     return user;
//   }),

//   "user-pass"
// );