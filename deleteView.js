import page from "../../node_modules/page/page.mjs";
import { deleteFactById } from "../api/data.js";

export async function onDelete(event) {
  event.preventDefault();

  const confirmation = confirm("Are you sure you want to delete");

  if (confirmation) {
    await deleteFactById(event.target.id);
    page.redirect("/funFacts");
  }
}
