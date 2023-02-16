import { createAboutUsContent } from "./createAboutUsPage";
import { createHeader } from "./createHeader";
import { createIntroduction } from "./createIntroduction";
import { createMainMenu, createStarterMenu } from "./createMenuPage";
import { createContactForm } from "./createContactPage";

const content = document.getElementById("content");

createPage();
function createPage() {
  document.body.prepend(createHeader(), createIntroduction());
  let aboutUs = createAboutUsContent();
  content.classList.add("about-us"); // add 'active' to see about us page
  content.append(aboutUs.title, aboutUs.script);
  document.body.append(createFooter());
}

document.body.addEventListener("click", function (event) {
  if (event.target.id == "menu") {
    clearContent();
    renderMenuPage();
  } else if (event.target.id == "about") {
    clearContent();
    renderAboutUsPage();
  } else if(event.target.id == 'contact') {
    clearContent();
    renderContactPage();
  }
});

function clearContent() {
  content.classList.remove("menu");
  content.classList.remove("about-us");
  content.replaceChildren();
}

function renderMenuPage() {
  content.classList.add("menu");
  content.append(createStarterMenu(), createMainMenu());
}

function renderAboutUsPage() {
  let aboutUs = createAboutUsContent();
  content.classList.add("about-us"); // add 'active' to see about us page
  content.append(aboutUs.title, aboutUs.script);
}

function renderContactPage() {
    content.append(createContactForm());
}

function createFooter() {
  let footer = document.createElement("footer");
  footer.innerHTML = "&copysr; Hoang Manh Hung 2023";
  return footer;
}
