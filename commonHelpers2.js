import{g as i,d as r,i as p,e as c,h as d,r as e,o as g,t as h}from"./assets/localStorage-3158d51c.js";import"./assets/vendor-42c9f451.js";const m=document.querySelector("#shopping-list"),s=document.querySelector(".box-bookslist");a();function a(){i().length?s.classList.add("emptyShoppingList"):s.classList.remove("emptyShoppingList")}window.addEventListener("load",n);function n(){const t=i().map(l=>b(l)).join("");m.innerHTML=t,document.querySelector("#shopping-list").addEventListener("click",u)}function u(t){!t.target.hasAttribute("id")!=="icon-deleteBtn"&&(r(t),a(),n())}function b(t){return`<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${t._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="${p}#icon-trash-03"></use>
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
            <img src="${c}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="62" height="19">
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
            <img src="${d}" alt="apple-book" class="apple-logo shopping-apple-logo" width="33" height="32">
          </a>
        </div>
      </div>
    </div>
  </li>`}window.addEventListener("resize",function(){L()});function L(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=document.querySelector(".support");t>1440&&o?o.style.display="block":o.style.display="none"}localStorage.getItem("theme")==="dark"&&(e.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));e.themeCheckbox.addEventListener("change",g);e.burgerBtn.addEventListener("click",()=>{e.burgerCont.classList.toggle("is-open-burger"),e.body.classList.toggle("modal-open-burger"),h()});
//# sourceMappingURL=commonHelpers2.js.map
