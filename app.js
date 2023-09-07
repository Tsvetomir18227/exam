import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { updateNav } from "./utils.js";
import { showHome } from "./views/homePageView.js";
import { showLogin } from "./views/loginView.js";
import { showRegister } from "./views/registerView.js";
import { showFunFacts } from "./views/funFactsView.js";
import { showDetails } from "./views/detailsView.js";
import { showEdit } from "./views/editView.js";
import { addFact } from "./views/addFact.js";

function decorateContext(ctx, next) {
  ctx.render = function (content) {
    render(content, document.querySelector("main"));
  };
  next();
}


updateNav();

page(decorateContext);  
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/funFacts", showFunFacts);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/addFact", addFact);

page.start();
