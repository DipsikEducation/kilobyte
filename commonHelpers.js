import{a as d,i as n}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="https://books-backend.p.goit.global/books/";async function u(){return await d.get(`${g}top-books`)}async function f(o){return await d.get(`${g}category?category=${o}`)}const m=document.querySelector(".home-categories-list"),c=document.querySelector(".main-category-title");function h(o){const t=o;console.log(o),f(t).then(i=>{Object.keys(i.data).length!==0?(a.innerHTML="",y(i.data,t)):(m.innerHTML="",n.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(i=>{console.log("Error loading data:",i),n.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function y(o,t){const i=o.map(e=>`
        <li class="home-books-item" id="${e._id}">
            <div class="home-book-wrapper">
                <img class="book-image" src="${e.book_image}" alt="${e.title}">
            </div>
            <div class="image-overlay"><p class="image-overlay-text">QUICK VIEW</p></div>
            <div class="book-info">
                <p class="book-info-title">${e.title}</p>
                <p class="book-info-author">${e.author}</p>
            </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",i);const s=t.split(" ");if(s.length>3){const e=s[Math.round((s.length-1)/2)];let r=t.split(e).join(" ");r=r.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),c.innerHTML=r}else t=t.replace(s[s.length-1],`<span class="main-category-title-span">${s[s.length-1]}</span>`),c.innerHTML=t}const a=document.querySelector(".home-categories-list");let p;const b={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},k={...b,backgroundColor:"#EF4040",maxWidth:400};function L(){window.addEventListener("load",()=>{u().then(o=>{Object.keys(o.data).length!==0?(a.innerHTML="",v(o.data)):(a.innerHTML="",n.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),n.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...k})})})}function v(o){const t=o.map(i=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${i.list_name}</h3>
        <ul class="home-books-list">${$(i.books)}</ul>
        <button class="button see-more" data-js="${i.list_name}">See more</button>
        </li>`).join("");a.insertAdjacentHTML("beforeend",t),p=document.querySelectorAll(".see-more"),S()}function $(o){return o.map(t=>`
        <li class="home-books-item" id="${t._id}">
            <div class="home-book-wrapper">
                <img class="book-image" src="${t.book_image}" alt="${t.title}">
            </div>
            <div class="image-overlay"><p class="image-overlay-text">QUICK VIEW</p></div>
            <div class="book-info">
                <p class="book-info-title">${t.title}</p>
                <p class="book-info-author">${t.author}</p>
            </div>
        </li>`).join("")}function S(){for(let o of p)o.addEventListener("click",()=>h(o.getAttribute("data-js")))}localStorage.getItem("theme")==="dark"&&(refs.themeCheckbox.checked=!0);L();
//# sourceMappingURL=commonHelpers.js.map
