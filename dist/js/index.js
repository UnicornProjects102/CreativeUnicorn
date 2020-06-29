import Router from "./router.js";
import routes from "./routes.js";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const homeHeaderTitle = document.querySelector(".home__header--title");
const homeHeaderSubtitle = document.querySelector(".home__header--subtitle");
const arrows = document.querySelectorAll(".arrow");
const homeLink = document.querySelector(".homelink");
const aboutLink = document.querySelector(".aboutlink");
const projectsLink = document.querySelector(".projectslink");
const contactLink = document.querySelector(".contactlink");

const router = new Router(routes);

homeLink.addEventListener("click", () => {
  router.loadRoute("");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));
  showMenu = false;
});
aboutLink.addEventListener("click", () => {
  router.loadRoute("about");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));
  showMenu = false;
});
projectsLink.addEventListener("click", () => {
  router.loadRoute("projects");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));
  showMenu = false;
});
contactLink.addEventListener("click", () => {
  router.loadRoute("contact");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));
  showMenu = false;
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("arrow-icon")) {
    showAbout(e);
  }
});

function showAbout(e) {
  e.target.parentElement.parentElement.classList.toggle("open");
  if (e.target.classList.contains("fa-chevron-up")) {
    e.target.classList.remove("fa-chevron-up");
    e.target.classList.add("fa-chevron-down");
  } else {
    e.target.classList.remove("fa-chevron-down");
    e.target.classList.add("fa-chevron-up");
  }
}

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
