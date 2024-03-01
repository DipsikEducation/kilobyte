import{a as c,i as l}from"./assets/vendor-edda1e25.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u="https://books-backend.p.goit.global/books/";async function d(){return await c.get(`${u}top-books`)}const n=document.querySelector(".home-categories-list");function m(){window.addEventListener("load",()=>{d().then(o=>{if(Object.keys(o.data.lenght!==0))n.innerHTML="",f(o.data);else return n.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"})}).catch(o=>(console.log(o),l.error({message:o.message,position:"topRight"})))})}function f(o){console.log(o);const t=o.map(r=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${r.list_name}</h3>
        <ul class="home-books-list">${p(r.books)}</ul>
        <button class="button see-more" data-js="${r.list_name}">See more</button>
        </li>`).join("");n.insertAdjacentHTML("beforeend",t)}function p(o){return console.log(o),o.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="home-book-wrapper">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
            </div>
            <div class="image-overlay"><p class="image-overlay-text">QUICK VIEW</p></div>
            <div class="book-info">
                <p class="book-info-title">${t.title}</p>
                <p class="book-info-author">${t.author}</p>
            </div>
        </li>`).join("")}m();
//# sourceMappingURL=commonHelpers.js.map
