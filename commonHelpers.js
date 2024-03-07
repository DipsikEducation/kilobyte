import{f,a as y,r,t as k,o as b,b as L,c as v}from"./assets/localStorage-346c8cdb.js";import{i as c}from"./assets/vendor-bbb17a86.js";let d;const g=document.querySelector(".main-category-title");function p(e){const t=e;console.log(e),f(t).then(o=>{Object.keys(o.data).length!==0?(i.innerHTML="",E(o.data,t)):(i.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function E(e,t){i.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const o=e.map(a=>`
        <li class="home-books-item" id="${a._id}">
        <div class="image-overlay">
            <img class="book-image" src="${a.book_image}" alt="${a.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${a.title}</p>
                <p class="book-author">${a.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let l=document.querySelector(".all-cat-btn");l.addEventListener("click",function(){const a=document.querySelector(".categories__item.selected");a&&a.classList.remove("selected"),document.querySelector('[data-category="all categories"]').classList.add("selected")}),C(l);const s=t.split(" ");if(s.length>3){const a=s[Math.round((s.length-1)/2)];let n=t.split(a).join(" ");n=n.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=n}else t=t.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),g.innerHTML=t}function C(e){e.addEventListener("click",()=>{u(),h()})}function h(){g.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const i=document.querySelector(".home-categories-list");let m;const S=document.querySelector(".loader");window.addEventListener("load",()=>{S.style.display="none"});const T={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},B={...T,backgroundColor:"#EF4040",maxWidth:400};function u(){y().then(e=>{Object.keys(e.data).length!==0?(i.innerHTML="",H(e.data)):(i.innerHTML="",c.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(e=>{console.log("Error loading data:",e),c.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...B})})}function H(e){const t=e.map(o=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${o.list_name}</h3>
        <ul class="home-books-list">${$(o.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${o.list_name}">See more</button>
        </div>
        </li>`).join("");i.insertAdjacentHTML("beforeend",t),m=document.querySelectorAll(".see-more"),m.forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.js,s=document.querySelector(`.categories__item[data-category="${l}"]`);s&&(document.querySelectorAll(".categories__item.selected").forEach(a=>{a.classList.remove("selected")}),s.classList.add("selected"))})}),M()}function $(e){return e.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="image-overlay">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${t.title}</p>
                <p class="book-author">${t.author}</p>
            </div>
        </li>`).join("")}function M(){for(let e of m)e.addEventListener("click",()=>p(e.getAttribute("data-js")))}r.categoriesRef.addEventListener("click",_);function _(e){e.preventDefault();const t=e.target.closest("a");if(!t||!t.parentElement.classList.contains("categories__item"))return;const o=t.parentElement;o.dataset.category==="all categories"?(Array.from(o.parentElement.children).forEach(s=>{s.classList.remove("selected")}),o.classList.add("selected"),u(),h()):(Array.from(o.parentElement.children).forEach(s=>{s.classList.remove("selected")}),o.classList.add("selected"),p(o.dataset.category))}u();r.burgerBtn.addEventListener("click",()=>{r.burgerCont.classList.toggle("is-open-burger"),r.body.classList.toggle("modal-open-burger"),k()});localStorage.getItem("theme")==="dark"&&(r.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));r.themeCheckbox.addEventListener("change",b);L.addEventListener("click",v);window.addEventListener("scroll",()=>{window.scrollY>100?r.upButton.style.display="block":r.upButton.style.display="none"});r.upButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
