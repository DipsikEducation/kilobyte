import{g as i,d as l,e as p,h as r}from"./assets/localStorage-5c7be92b.js";import"./assets/vendor-b7a1aa6d.js";const c=document.querySelector("#shopping-list"),e=document.querySelector(".box-bookslist");s();function s(){i().length?e.classList.add("emptyShoppingList"):e.classList.remove("emptyShoppingList")}window.addEventListener("load",n);function n(){const t=i().map(a=>g(a)).join("");c.innerHTML=t,document.querySelector("#shopping-list").addEventListener("click",d)}function d(t){!t.target.hasAttribute("id")!=="icon-deleteBtn"&&(l(t),s(),n())}function g(t){return`<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${t._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="/img/noptimizesprite.svg#icon-trash-03"></use>
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
            <img src="${r}" alt="apple-book" class="apple-logo shopping-apple-logo" width="33" height="32">
          </a>
        </div>
      </div>
    </div>
  </li>`}window.addEventListener("resize",function(){h()});function h(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=document.querySelector(".support");t>1440&&o?o.style.display="block":o.style.display="none"}
//# sourceMappingURL=commonHelpers2.js.map
