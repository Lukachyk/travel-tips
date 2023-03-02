const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 472) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});
customSelect("select");
