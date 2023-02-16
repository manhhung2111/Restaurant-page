export function createHeader() {
  let header = document.createElement("header");
  header.appendChild(createImage());
  header.appendChild(createNavigation());
  header.appendChild(createOrderButton());
  return header;
}

function createImage() {
  let img = document.createElement("img");
//   img.width = "100px";
//   img.height = "96px";
  img.classList.add("image");
  img.src = "/src/grizz.png";
  return img;
}

function createNavigation() {
  let nav = document.createElement("nav");
  nav.classList.add("links");
  const links = ["MENU", "LOCATIONS", "ABOUT", "CONTACT"];
  const id = ['menu', 'locations', 'about', 'contact']
  for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.classList.add("header-link");
    div.id = id[i];
    div.textContent = links[i];
    nav.appendChild(div);
  }
  return nav;
}

function createOrderButton() {
  let div = document.createElement("div");
  div.classList.add("order-button");
  div.textContent = "ORDER ONLINE";
  return div;
}
