import{g as i,d as r,i as c,e as p,h as d,r as o,o as h,t as g}from"./assets/localStorage-b811e2e4.js";import"./assets/vendor-42c9f451.js";const m=document.querySelector("#shopping-list"),s=document.querySelector(".box-bookslist");n();function n(){i().length?s.classList.add("emptyShoppingList"):s.classList.remove("emptyShoppingList")}window.addEventListener("load",a);function a(){const t=i().map(l=>L(l)).join("");m.innerHTML=t,document.querySelector("#shopping-list").addEventListener("click",u)}function u(t){!t.target.hasAttribute("id")!=="icon-deleteBtn"&&(r(t),n(),a())}function L(t){return`<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${t._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="${c}#icon-trash-03"></use>
      </svg>
    </button>
      <img src="${t.book_image}" alt="${t.title}" class="shopping-item-img">
      
    
    <div class="book-info-wrap">
      <p class="book-title shopping-book-title break-text">${t.title}</p>
      <p class="shopping-book-category break-text">${t.list_name}</p>
      <p class="book-alt-text">${t.description}</p>
      <div class="author-shops-wrap">
        <p class="book-author">${t.author}</p>
        <div class="img-wrap shopping-img-wrap">
          <a href="${t.amazon_product_url}" target="blank">
            <img src="${p}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="62" height="19">
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
            <img src="${d}" alt="apple-book" class="apple-logo shopping-apple-logo" width="33" height="32">
          </a>
        </div>
      </div>
    </div>
  </li>`}window.addEventListener("resize",function(){b()});function b(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=document.querySelector(".support");t>1440&&e?e.style.display="block":e.style.display="none"}document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.querySelector(".header-nav-shop");t.includes("shopinglist.html")&&e.classList.add("is-active")});localStorage.getItem("theme")==="dark"&&(o.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));o.themeCheckbox.addEventListener("change",h);o.burgerBtn.addEventListener("click",()=>{o.burgerCont.classList.toggle("is-open-burger"),o.body.classList.toggle("modal-open-burger"),g()});
//# sourceMappingURL=commonHelpers2.js.map
