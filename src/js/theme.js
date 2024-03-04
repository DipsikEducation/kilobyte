const currentPageUrl = window.location.href;

if (currentPageUrl.indexOf("index.html") !== -1 || currentPageUrl.endsWith("/")) {
    document.querySelector(".header-nav-home").classList.add("active");
}

const currentPageUr2 = window.location.href;

if (currentPageUrl.indexOf("modalburger.html") !== -1) {
    document.querySelector(".shopinglist-container").classList.add("active");
}
