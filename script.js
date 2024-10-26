window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const stackedNavbar = document.querySelector(".stacked-navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-small");
    stackedNavbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("navbar-small");
    stackedNavbar.classList.remove("scrolled");
  }
};
