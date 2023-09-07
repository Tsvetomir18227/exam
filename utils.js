import { logout } from "./api/users.js";



export function updateNav() {
  const userNav = document.querySelector(".user");
  const guestNav = document.querySelector(".guest");
  const funFacts = document.getElementById("funFacts");
  if (sessionStorage.getItem("user")) {
    userNav.style.display = "inline";
    guestNav.style.display = "none";
    funFacts.style.display = "inline";

    document.getElementById("logoutBtn").addEventListener("click", onLogout);
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "inline";
    funFacts.style.display = "inline";

  }
}

async function onLogout(event) {
event.preventDefault();
await logout();
updateNav();

}
