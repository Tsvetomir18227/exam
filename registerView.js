import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/users.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";



const registerTemplate = () => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit = "${onRegister}">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;
export function showRegister(ctx){

    ctx.render(registerTemplate());
}

async function onRegister(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');
    if(password!== rePassword){
        return alert('Passwords do not match');
    }
    if(!email ||!password ||!rePassword){
        return alert('All fields are required');
    }

    await register(email, password)

    page.redirect("/");
    updateNav();
}
