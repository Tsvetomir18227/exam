import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFunFact } from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

const createTemplate = () => html`<section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit="${onCreate}">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export function addFact(ctx) {
  console.log("...added...");

  ctx.render(createTemplate());
}

async function onCreate(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const category = formData.get("category");
  const imageUrl = formData.get("image-url");
  const description = formData.get("description");
  const additionalInfo = formData.get("additional-info");

  const data = {
    category: category,
    imageUrl: imageUrl,
    description: description,
    moreInfo: additionalInfo,
  };

  if (!category || !imageUrl || !description || !additionalInfo) {
    alert("Please fill all fields");
    return;
  }

  await createFunFact(data);
  page.redirect("/");
}
