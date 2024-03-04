import{f as y,a as b,r as a,o as k,b as L,c as v}from"./assets/localStorage-9b7c8adb.js";import{i as c}from"./assets/vendor-b7a1aa6d.js";let d;const g=document.querySelector(".main-category-title");function u(e){const t=e;console.log(e),y(t).then(o=>{Object.keys(o.data).length!==0?(l.innerHTML="",E(o.data,t)):(l.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function E(e,t){l.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const o=e.map(r=>`
        <li class="home-books-item" id="${r._id}">
        <div class="image-overlay">
            <img class="book-image" src="${r.book_image}" alt="${r.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${r.title}</p>
                <p class="book-author">${r.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let i=document.querySelector(".all-cat-btn");i.addEventListener("click",function(){const r=document.querySelector(".categories__item.selected");r&&r.classList.remove("selected"),document.querySelector('[data-category="all categories"]').classList.add("selected")}),C(i);const s=t.split(" ");if(s.length>3){const r=s[Math.round((s.length-1)/2)];let n=t.split(r).join(" ");n=n.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=n}else t=t.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=t}function C(e){e.addEventListener("click",()=>{p(),f()})}function f(){g.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const l=document.querySelector(".home-categories-list");let m;const S=document.querySelector(".loader");window.addEventListener("load",()=>{S.style.display="none"});const T={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},B={...T,backgroundColor:"#EF4040",maxWidth:400};function p(){b().then(e=>{Object.keys(e.data).length!==0?(l.innerHTML="",H(e.data)):(l.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(e=>{console.log("Error loading data:",e),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...B})})}function H(e){const t=e.map(o=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${o.list_name}</h3>
        <ul class="home-books-list">${$(o.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${o.list_name}">See more</button>
        </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),m=document.querySelectorAll(".see-more"),m.forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.js,s=document.querySelector(`.categories__item[data-category="${i}"]`);s&&(document.querySelectorAll(".categories__item.selected").forEach(r=>{r.classList.remove("selected")}),s.classList.add("selected"))})}),A()}function $(e){return e.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="image-overlay">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${t.title}</p>
                <p class="book-author">${t.author}</p>
            </div>
        </li>`).join("")}function A(){for(let e of m)e.addEventListener("click",()=>u(e.getAttribute("data-js")))}function M(){a.modal.style.display==="block"?(a.modal.style.display="none",a.modalImage.setAttribute("href","./img/noptimizesprite.svg#icon-align-left")):(a.modal.style.display="block",a.modalImage.setAttribute("href","./img/noptimizesprite.svg#icon-x-close"))}a.categoriesRef.addEventListener("click",h);function h(e){if(!e||!e.target||!e.target.classList.contains("categories__item"))return;const t=e.target;t.dataset.category==="all categories"?(Array.from(t.parentElement.children).forEach(i=>{i.classList.remove("selected")}),t.classList.add("selected"),p(),f()):(Array.from(t.parentElement.children).forEach(i=>{i.classList.remove("selected")}),t.classList.add("selected"),u(t.dataset.category))}p();a.burgerBtn.addEventListener("click",()=>{a.burgerCont.classList.toggle("is-open-burger"),a.body.classList.toggle("modal-open-burger"),M()});localStorage.getItem("theme")==="dark"&&(a.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));h();a.themeCheckbox.addEventListener("change",k);L.addEventListener("click",v);window.addEventListener("scroll",()=>{window.scrollY>100?a.upButton.style.display="block":a.upButton.style.display="none"});a.upButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
