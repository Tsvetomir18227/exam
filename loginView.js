import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/users.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";

const loginTemplate = () => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit="${onSubmit}">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </section>
`;
export function showLogin(ctx) {
  ctx.render(loginTemplate());
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return alert("Please fill all fields");
  }

  await login(email, password);

  page.redirect("/");
  updateNav();

  //redirect to home

  //render(loginTemplate(data), document.querySelector("body div.container"));
}
