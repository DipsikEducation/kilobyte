// const currentPageUrl = window.location.href;

// if (currentPageUrl.indexOf("index.html") !== -1 || currentPageUrl.endsWith("/")) {
//     document.querySelector(".header-nav-home").classList.add("active");
// }

// const currentPageUr2 = window.location.href;

// if (currentPageUr2.indexOf("shopinglist.html") !== -1 || currentPageUr2.endsWith("/"))  {
//     document.querySelector(".header-nav-shop").classList.add("active");
// }

document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('.header-nav a');

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('is-active');
    }
    link.addEventListener('click', function (event) {
      navLinks.forEach(link => {
        link.classList.remove('is-active');
      });
      this.classList.add('is-active');
    });
  });
});