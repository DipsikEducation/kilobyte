import{g as c,d as u,i as m,e as h,h as b,r as s,o as f,t as y}from"./assets/localStorage-795e456a.js";import{P as L}from"./assets/vendor-bbb17a86.js";const v=document.querySelector("#shopping-list"),l=document.querySelector(".box-bookslist");p();function p(){c().length?l.classList.add("emptyShoppingList"):l.classList.remove("emptyShoppingList")}function r(t){const e=(t||c()).map(i=>S(i)).join("");v.innerHTML=e,document.querySelector("#shopping-list").addEventListener("click",k)}function k(t){!t.target.hasAttribute("id")!=="icon-deleteBtn"&&(u(t),p(),r())}function S(t){return`<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${t._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="${m}#icon-trash-03"></use>
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
            <img src="${h}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="62" height="19">
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
            <img src="${b}" alt="apple-book" class="apple-logo shopping-apple-logo" width="33" height="32">
          </a>
        </div>
      </div>
    </div>
  </li>`}window.addEventListener("resize",function(){w()});function w(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=document.querySelector(".support");t>1440&&e?e.style.display="block":e.style.display="none"}document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.querySelector(".header-nav-shop");t.includes("shopinglist.html")&&e.classList.add("is-active")});const P=document.querySelector("#pagination1");let o;function $(){console.log(window.screen.width),window.screen.width<768&&(a.itemsPerPage=4,a.visiblePages=2),o=new L("pagination1",a);const t=JSON.parse(localStorage.getItem("modal"));t.length<3&&(P.style.display="none"),o.setTotalItems(t.length),o.reset()}const a={totalItems:10,itemsPerPage:3,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};$();o.on("afterMove",t=>{const e=t.page-1,n=JSON.parse(localStorage.getItem("modal")),i=e*a.itemsPerPage,g=i+a.itemsPerPage,d=n.slice(i,g);r(d)});o.movePageTo(1);localStorage.getItem("theme")==="dark"&&(s.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));s.themeCheckbox.addEventListener("change",f);s.burgerBtn.addEventListener("click",()=>{s.burgerCont.classList.toggle("is-open-burger"),s.body.classList.toggle("modal-open-burger"),y()});
//# sourceMappingURL=commonHelpers2.js.map
