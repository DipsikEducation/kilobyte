import{f as L,a as v,r as a,o as C,b as E,c as S}from"./assets/localStorage-cf111705.js";import{i as l}from"./assets/vendor-b7a1aa6d.js";let d;const m=document.querySelector(".main-category-title");function h(e){const t=e;console.log(e),L(t).then(o=>{Object.keys(o.data).length!==0?(i.innerHTML="",B(o.data,t)):(i.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),l.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function B(e,t){i.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const o=e.map(r=>`
        <li class="home-books-item" id="${r._id}">
        <div class="image-overlay">
            <img class="book-image" src="${r.book_image}" alt="${r.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${r.title}</p>
                <p class="book-author">${r.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let n=document.querySelector(".all-cat-btn");T(n);const s=t.split(" ");if(s.length>3){const r=s[Math.round((s.length-1)/2)];let c=t.split(r).join(" ");c=c.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),m.innerHTML=c}else t=t.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),m.innerHTML=t}function T(e){e.addEventListener("click",()=>{u(),f()})}function f(){m.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const i=document.querySelector(".home-categories-list");let b;const H=document.querySelector(".loader");window.addEventListener("load",()=>{H.style.display="none"});const $={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},M={...$,backgroundColor:"#EF4040",maxWidth:400};function u(){v().then(e=>{Object.keys(e.data).length!==0?(i.innerHTML="",A(e.data)):(i.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(e=>{console.log("Error loading data:",e),l.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...M})})}function A(e){const t=e.map(o=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${o.list_name}</h3>
        <ul class="home-books-list">${j(o.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${o.list_name}">See more</button>
        </div>
        </li>`).join("");i.insertAdjacentHTML("beforeend",t),b=document.querySelectorAll(".see-more"),q()}function j(e){return e.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="image-overlay">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${t.title}</p>
                <p class="book-author">${t.author}</p>
            </div>
        </li>`).join("")}function q(){for(let e of b)e.addEventListener("click",()=>h(e.getAttribute("data-js")))}const g=document.getElementById("burgermenu");document.getElementById("icon-align-left");const p=document.querySelector("#modal-burger-btn");function y(){g.style.display==="block"?(g.style.display="none",p.setAttribute("href","./img/noptimizesprite.svg#icon-align-left")):(g.style.display="block",p.setAttribute("href","./img/noptimizesprite.svg#icon-x-close"))}const w=document.querySelector("body"),x=document.querySelector(".backdrop"),I=document.querySelector("#icon-align-left");I.addEventListener("click",()=>{x.classList.toggle("is-open"),w.classList.toggle("modal-open"),y()});a.categoriesRef.addEventListener("click",k);function k(e){if(!e||!e.target||!e.target.classList.contains("categories__item"))return;const t=e.target;t.dataset.category==="all categories"?(Array.from(t.parentElement.children).forEach(n=>{n.classList.remove("selected")}),t.classList.add("selected"),u(),f()):(Array.from(t.parentElement.children).forEach(n=>{n.classList.remove("selected")}),t.classList.add("selected"),h(t.dataset.category))}u();localStorage.getItem("theme")==="dark"&&(a.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));k();a.themeCheckbox.addEventListener("change",C);E.addEventListener("click",S);window.addEventListener("scroll",()=>{window.scrollY>100?a.upButton.style.display="block":a.upButton.style.display="none"});a.upButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});a.burgerBtn.addEventListener("click",()=>{burgerCont.classList.toggle("is-open"),body.classList.toggle("modal-open"),y()});
//# sourceMappingURL=commonHelpers.js.map
