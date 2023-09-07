import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";
import { updateFactById, getFactById } from "../api/data.js";

const editTemplate = (funFact) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form" @submit="${onEdit}" id="${funFact._id}">
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        value=${funFact.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        value="${funFact.imageUrl}"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      >
${funFact.description}</textarea
      >
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      >
${funFact.moreInfo}</textarea
      >
      <button type="submit">Post</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const data = await getFactById(id);
  ctx.render(editTemplate(data));
}

async function onEdit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const id = document.querySelector("form").id;
  const category = formData.get("category");
  const imageUrl = formData.get("image-url");
  const description = formData.get("description");
  const additionalInfo = formData.get("additional-info");
  const funFact = {
    category: category,
    imageUrl: imageUrl,
    description: description,
    moreInfo: additionalInfo,
  };

  if (!category || !imageUrl || !description || !additionalInfo) {
    alert("Please fill all fields");
    return;
  }
  await updateFactById(id, funFact);
  page.redirect("/funFacts");
}
