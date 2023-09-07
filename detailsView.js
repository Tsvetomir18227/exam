import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFactById } from "../api/data.js";
import { onDelete } from "./deleteView.js";

const detailsTemplate = (funFact) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isFactOwner =
    JSON.parse(sessionStorage.getItem("user")) &&
    funFact._ownerId === JSON.parse(sessionStorage.getItem("user"))._id;

  //   const isFurnitureOwner =
  //     furniture._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id;
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${funFact.imageUrl}" alt="example1" />
        <p id="details-category">${funFact.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${funFact.description}</p>
            <p id="more-info">${funFact.moreInfo}</p>
          </div>

          <h3>Likes:<span id="likes">0</span></h3>

          <!--Edit and Delete are only for creator-->
          ${isFactOwner
            ? html` <div id="action-buttons">
                <a href="/edit/${funFact._id}" id="edit-btn">Edit</a>
                <a
                  href="javascript:void(0)"
                  id="${funFact._id}"
                  class="deleteButton"
                  >Delete</a
                >
              </div>`
            : null}
          ${user && !isFactOwner
            ? html`<div id="action-buttons">
                <a href="" id="like-btn">Like</a>
              </div>`
            : null}
        </div>
      </div>
    </section>
  `;
};

export async function showDetails(context) {
  const id = context.params.id;
  console.log(id);
  const data = await getFactById(id);

  context.render(detailsTemplate(data));
  //console.log(document.querySelector(".deleteButton"));

  document.querySelector(".deleteButton").addEventListener("click", onDelete);
}
