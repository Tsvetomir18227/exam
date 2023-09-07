import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFunFacts } from "../api/data.js";

const funFactItem = (funfact) => html`
  <div class="fact">
    <img src="${funfact.imageUrl}" alt="example1" />
    <h3 class="category">${funfact.category}</h3>
    <p class="description">${funfact.description}</p>
    <a class="details-btn" href="/details/${funfact._id}">More Info</a>
  </div>
`;

const funFactsTemplate = (data) => html`
  <h2>Fun Facts</h2>
  <section id="dashboard">
    ${data.map((funFacts) => funFactItem(funFacts))}
  </section>
`;

export async function showFunFacts(ctx) {
  const data = await getAllFunFacts();
  ctx.render(funFactsTemplate(data));
}
