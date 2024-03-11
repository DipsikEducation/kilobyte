import{f as h,a as L,r,t as k,o as y,b,c as v}from"./assets/localStorage-6bbd7233.js";import{i as c}from"./assets/vendor-bbb17a86.js";let d;const g=document.querySelector(".main-category-title");function p(o){const t=o;h(t).then(e=>{Object.keys(e.data).length!==0?(n.innerHTML="",E(e.data,t)):(n.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(e=>{console.log("Error loading data:",e),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function E(o,t){n.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const e=o.map(a=>`
        <li class="home-books-item" id="${a._id}" tabindex="0">
        <div class="image-overlay">
            <img class="book-image" src="${a.book_image}" alt="${a.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${a.title}</p>
                <p class="book-author">${a.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",e),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let i=document.querySelector(".all-cat-btn");i.addEventListener("click",function(){const a=document.querySelector(".categories__item.selected");a&&a.classList.remove("selected"),document.querySelector('[data-category="all categories"]').classList.add("selected")}),C(i);const s=t.split(" ");if(s.length>3){const a=s[Math.round((s.length-1)/2)];let l=t.split(a).join(" ");l=l.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=l}else t=t.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=t}function C(o){o.addEventListener("click",()=>{u(),f()})}function f(){g.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const n=document.querySelector(".home-categories-list");let m;const S=document.querySelector(".loader");window.addEventListener("load",()=>{S.style.display="none"});const T={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},B={...T,backgroundColor:"#EF4040",maxWidth:400};function u(){L().then(o=>{Object.keys(o.data).length!==0?(n.innerHTML="",H(o.data)):(n.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...B})})}function H(o){const t=o.map(e=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${e.list_name}</h3>
        <ul class="home-books-list">${M(e.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${e.list_name}">See more</button>
        </div>
        </li>`).join("");n.insertAdjacentHTML("beforeend",t),m=document.querySelectorAll(".see-more"),m.forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.js,s=document.querySelector(`.categories__item[data-category="${i}"]`);s&&(document.querySelectorAll(".categories__item.selected").forEach(a=>{a.classList.remove("selected")}),s.classList.add("selected"))})}),$()}function M(o){return o.map(t=>`
        <li class="home-books-item" id="${t._id}">
          <a href="javascript:void(0)" class="book-link">
            <div class="image-overlay">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${t.title}</p>
                <p class="book-author">${t.author}</p>
            </div>
          </a>
        </li>`).join("")}function $(){for(let o of m)o.addEventListener("click",()=>p(o.getAttribute("data-js")))}r.categoriesRef.addEventListener("click",A);function A(o){o.preventDefault();const t=o.target.closest("a");if(!t||!t.parentElement.classList.contains("categories__item"))return;const e=t.parentElement;e.dataset.category==="all categories"?(Array.from(e.parentElement.children).forEach(s=>{s.classList.remove("selected")}),e.classList.add("selected"),u(),f()):(Array.from(e.parentElement.children).forEach(s=>{s.classList.remove("selected")}),e.classList.add("selected"),p(e.dataset.category))}document.addEventListener("DOMContentLoaded",function(){const o=window.location.href,t=document.querySelectorAll(".header-nav a");t.forEach(e=>{o.includes(e.getAttribute("href"))&&e.classList.add("is-active")}),t.forEach(e=>{e.addEventListener("click",function(){t.forEach(i=>{i.classList.remove("is-active")}),e.classList.add("is-active")})})});u();r.burgerBtn.addEventListener("click",()=>{r.burgerCont.classList.toggle("is-open-burger"),r.body.classList.toggle("modal-open-burger"),k()});localStorage.getItem("theme")==="dark"&&(r.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));r.themeCheckbox.addEventListener("change",y);b.addEventListener("click",v);window.addEventListener("scroll",()=>{window.scrollY>100?r.upButton.style.display="block":r.upButton.style.display="none"});r.upButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
