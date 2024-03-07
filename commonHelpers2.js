import{g as r,d as h,i as f,e as b,h as y,r as i,o as L,t as P}from"./assets/localStorage-38e8b430.js";import{P as v}from"./assets/vendor-bbb17a86.js";const a={pagination:null},l=document.querySelector("#pagination1");function S(){console.log(window.screen.width),window.screen.width<768&&(o.itemsPerPage=4,o.visiblePages=2),a.pagination=new v("pagination1",o);const t=JSON.parse(localStorage.getItem("modal"));t.length<3&&(l.style.display="none"),a.pagination.setTotalItems(t.length),a.pagination.reset()}const o={totalItems:10,itemsPerPage:3,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};S();function k(t,e){const s=t.page-1,n=JSON.parse(localStorage.getItem("modal")),c=s*o.itemsPerPage,m=c+o.itemsPerPage,u=n.slice(c,m);e(u)}function g(){const t=JSON.parse(localStorage.getItem("modal"))||[],e=a.pagination.getCurrentPage(),s=Math.ceil(t.length/o.itemsPerPage),n=e>s?s:e;a.pagination.setTotalItems(t.length),a.pagination.reset(),a.pagination.movePageTo(n),t.length<=3?l.classList.add("hidden"):l.classList.remove("hidden")}g();const w=document.querySelector("#shopping-list"),p=document.querySelector(".box-bookslist");d();function d(){r().length?p.classList.add("emptyShoppingList"):p.classList.remove("emptyShoppingList")}function I(t){const e=(t||r()).map(n=>x(n)).join("");w.innerHTML=e,document.querySelector("#shopping-list").addEventListener("click",$)}function $(t){!t.target.hasAttribute("id")!=="icon-deleteBtn"&&(h(t),d(),g())}function x(t){return`<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${t._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="${f}#icon-trash-03"></use>
      </svg>
    </button>
      <img src="${t.book_image}" alt="${t.title}" class="shopping-item-img">
      
    
    <div class="book-info-wrap">
      <p class="shopping-book-title break-text">${t.title}</p>
      <p class="shopping-book-category break-text">${t.list_name}</p>
      <p class="book-alt-text">${t.description}</p>
      <div class="author-shops-wrap">
        <p class="book-author">${t.author}</p>
        <div class="img-wrap shopping-img-wrap">
          <a href="${t.amazon_product_url}" target="blank">
            <img src="${b}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="32" height="11">
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
            <img src="${y}" alt="apple-book" class="apple-logo shopping-apple-logo" width="16" height="16">
          </a>
        </div>
      </div>
    </div>
  </li>`}window.addEventListener("resize",function(){C()});function C(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=document.querySelector(".support");t>1440&&e?e.style.display="block":e.style.display="none"}a.pagination.on("afterMove",t=>{k(t,I)});a.pagination.movePageTo(1);document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.querySelector(".header-nav-shop");t.includes("shopinglist.html")&&e.classList.add("is-active")});localStorage.getItem("theme")==="dark"&&(i.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));i.themeCheckbox.addEventListener("change",L);i.burgerBtn.addEventListener("click",()=>{i.burgerCont.classList.toggle("is-open-burger"),i.body.classList.toggle("modal-open-burger"),P()});
//# sourceMappingURL=commonHelpers2.js.map
