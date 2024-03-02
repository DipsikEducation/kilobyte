export const bookListRef = document.querySelector('.home-categories-list');
import { fetchBookDetails } from './fetchAPI';

let modalBtnCloseRef;

export async function onBookClick(event) {
  const clickedElement = event.target;
  const closestLi = clickedElement.closest('li');

  if (!closestLi.hasAttribute('id') || closestLi.id === null) return;
  document.querySelector('body').classList.add('no-scroll');

  const data = (await fetchBookDetails(closestLi.id)).data;
  bookListRef.insertAdjacentHTML('afterend', renderModalWindow(data));

  const backdropRef = document.querySelector('#modal-open');
  modalBtnCloseRef = document.querySelector('#modal-btn-close');

  backdropRef.addEventListener('click', closeModalWindow);
  modalBtnCloseRef.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindow);
}

function renderModalWindow(book) {
  return ` <div class="backdrop is-open" id="modal-open">
     <div class="modal-container">
    <div class="modal">
    <button type="button" class="modal-close-btn" id="modal-btn-close">
          <svg class="modal-btn-icon" width="16" height="16" id="modal-btn-close">
            <use href="./img/symbol-defs.svg#icon-x-close"></use>
          </svg>
        </button>
                <img class="book-img" src="${book.book_image}" alt="${book.title}">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <p class="book-alt-text">${book.description}</p>
                <div class="img-wrap">
                <a href="${book.amazon_product_url}" target="blank" >
                <img
                  src="./img/amazon.png"
                  alt="amazon"
                  class="amazon-logo"
                  width="62"
                  height="19"
                />
                </a>
                <a href="${book.buy_links[1].url}" target="_blank">
                <img
                  src="./img/book.png"
                  alt="apple-book"
                  class="apple-logo"
                  width="33"
                  height="32"
                />
                </div>
                </a>
                <button type="button" class="book-btn">add to shopping list</button>
              
  </div>
  </div> `;
}

function closeModalWindow(event) {
  const backdropRef = document.querySelector('#modal-open');
  if (
    event.target.id !== 'modal-open' &&
    event.target.id !== 'modal-btn-close' &&
    event.key !== 'Escape'
  )
    return;
  backdropRef.classList.remove('is-open');
  document.querySelector('body').classList.remove('no-scroll');

  backdropRef.removeEventListener('click', closeModalWindow);
  modalBtnCloseRef.removeEventListener('click', closeModalWindow);
  document.removeEventListener('keydown', closeModalWindow);
}
// to main.js
//import { onBookClick, bookListRef } from './js/modalWindowFunctions.js';
//bookListRef.addEventListener('click', onBookClick);
// to styles.css
//@import url(./modalWindow.css);
