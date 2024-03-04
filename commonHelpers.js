import{f as b,a as y,r as o,o as k,b as L,c as v}from"./assets/localStorage-563e94f1.js";import{i as n}from"./assets/vendor-b7a1aa6d.js";let d;const g=document.querySelector(".main-category-title");function p(e){const t=e;console.log(e),b(t).then(s=>{Object.keys(s.data).length!==0?(i.innerHTML="",C(s.data,t)):(i.innerHTML="",n.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(s=>{console.log("Error loading data:",s),n.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function C(e,t){i.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const s=e.map(r=>`
        <li class="home-books-item" id="${r._id}">
        <div class="image-overlay">
            <img class="book-image" src="${r.book_image}" alt="${r.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${r.title}</p>
                <p class="book-author">${r.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",s),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let l=document.querySelector(".all-cat-btn");E(l);const a=t.split(" ");if(a.length>3){const r=a[Math.round((a.length-1)/2)];let c=t.split(r).join(" ");c=c.replace(a[a.length-1],`<span class="main-category-title-span">${a[a.length-1]}</span>`),g.innerHTML=c}else t=t.replace(a[a.length-1],`<span class="main-category-title-span">${a[a.length-1]}</span>`),g.innerHTML=t}function E(e){e.addEventListener("click",()=>{m(),u()})}function u(){g.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const i=document.querySelector(".home-categories-list");let h;const T=document.querySelector(".loader");window.addEventListener("load",()=>{T.style.display="none"});const B={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},H={...B,backgroundColor:"#EF4040",maxWidth:400};function m(){y().then(e=>{Object.keys(e.data).length!==0?(i.innerHTML="",S(e.data)):(i.innerHTML="",n.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(e=>{console.log("Error loading data:",e),n.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...H})})}function S(e){const t=e.map(s=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${s.list_name}</h3>
        <ul class="home-books-list">${M(s.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${s.list_name}">See more</button>
        </div>
        </li>`).join("");i.insertAdjacentHTML("beforeend",t),h=document.querySelectorAll(".see-more"),$()}function M(e){return e.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="image-overlay">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${t.title}</p>
                <p class="book-author">${t.author}</p>
            </div>
        </li>`).join("")}function $(){for(let e of h)e.addEventListener("click",()=>p(e.getAttribute("data-js")))}function A(){o.modal.style.display==="block"?(o.modal.style.display="none",o.modalImage.setAttribute("href","./img/noptimizesprite.svg#icon-align-left")):(o.modal.style.display="block",o.modalImage.setAttribute("href","./img/noptimizesprite.svg#icon-x-close"))}o.categoriesRef.addEventListener("click",f);function f(e){if(!e||!e.target||!e.target.classList.contains("categories__item"))return;const t=e.target;t.dataset.category==="all categories"?(Array.from(t.parentElement.children).forEach(l=>{l.classList.remove("selected")}),t.classList.add("selected"),m(),u()):(Array.from(t.parentElement.children).forEach(l=>{l.classList.remove("selected")}),t.classList.add("selected"),p(t.dataset.category))}m();o.burgerBtn.addEventListener("click",()=>{o.burgerCont.classList.toggle("is-open-burger"),o.body.classList.toggle("modal-open-berger"),A()});localStorage.getItem("theme")==="dark"&&(o.themeCheckbox.checked=!0,document.body.classList.add("dark-theme"));f();o.themeCheckbox.addEventListener("change",k);L.addEventListener("click",v);window.addEventListener("scroll",()=>{window.scrollY>100?o.upButton.style.display="block":o.upButton.style.display="none"});o.upButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
