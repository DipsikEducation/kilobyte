import{a as c,i as l}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="https://books-backend.p.goit.global/books/";async function u(){return await c.get(`${d}top-books`)}const n=document.querySelector(".home-categories-list"),m={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},f={...m,backgroundColor:"#EF4040",maxWidth:400};function p(){window.addEventListener("load",()=>{u().then(o=>{Object.keys(o.data).lenght!==0?(n.innerHTML="",g(o.data)):(n.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),l.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...f})})})}function g(o){console.log(o);const t=o.map(r=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${r.list_name}</h3>
        <ul class="home-books-list">${h(r.books)}</ul>
        <button class="button see-more" data-js="${r.list_name}">See more</button>
        </li>`).join("");n.insertAdjacentHTML("beforeend",t)}function h(o){return console.log(o),o.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="home-book-wrapper">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
            </div>
            <div class="image-overlay"><p class="image-overlay-text">QUICK VIEW</p></div>
            <div class="book-info">
                <p class="book-info-title">${t.title}</p>
                <p class="book-info-author">${t.author}</p>
            </div>
        </li>`).join("")}p();
//# sourceMappingURL=commonHelpers.js.map
