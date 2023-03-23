import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";

// export let authenticator = new Authenticator<User>(sessionStorage);
export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {

    console.log("formStategy()");

    let email = form.get("email");
    let password = form.get("password");

    console.log("email", email, "password", password);
    
    try {
        console.log("je vais hash");
        var hashedPassword = await hash(password);
        console.log("j'ai hash");
        console.log("hashed password", hashedPassword);
    }
    catch(e) {
        console.log("e", e);
    }


    try {
        console.log("je vais login")
        var user = await login(email, password);
        console.log("j'ai login");
        console.log("user", user);
    }
    catch(e) {
        console.log("e", e);
    }


    return user;
  }),

  "user-pass"
);