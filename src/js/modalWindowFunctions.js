export const bookListRef = document.querySelector('.home-categories-list');
import { fetchBookDetails } from './fetchAPI';
import { addToLocalStorage } from "./localStorage.js";
import { getAllBooks } from "./localStorage.js";


let modalBtnCloseRef;

export async function onBookClick(event) {
  const clickedElement = event.target;
  const closestLi = clickedElement.closest('li');

  if (!closestLi.hasAttribute('id') || closestLi.id === null) return;
  document.querySelector('body').classList.add('no-scroll');

  const oneBookData = (await fetchBookDetails(closestLi.id)).data;

  bookListRef.insertAdjacentHTML('afterend', renderModalWindow(oneBookData));
  const listBtnRef = document.querySelector('.book-btn');
  const backdropRef = document.querySelector('#modal-open');
  modalBtnCloseRef = document.querySelector('#modal-btn-close');
  const listID = document.querySelector(".home-books-item")

  backdropRef.addEventListener('click', closeModalWindow);
  modalBtnCloseRef.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindow);
  listBtnRef.addEventListener("click", (event) => addToLocalStorage(event, oneBookData))
}




function renderModalWindow(book) {
  var buttonBasket;
  if (getAllBooks().find((b) => { return b._id === book._id })) {
    buttonBasket = "remove from the shopping list";
  }else buttonBasket = "add to shopping list";
  return ` <div class="backdrop is-open" id="modal-open">
    <div class="modal-container">
    <div class="modal">
    <button type="button" class="modal-close-btn" id="modal-btn-close">
          <svg class="modal-btn-icon" width="16" height="16" id="modal-btn-close">
            <use href="/img/noptimizesprite.svg#icon-x-close"></use>
          </svg>
        </button>
        <div class="book-wrap">
                <img class="book-img" src="${book.book_image}" alt="${book.title}">
                <div class="book-info-wrap">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <p class="book-alt-text">${book.description}</p>
                <div class="img-wrap">
                <a href="${book.amazon_product_url}" target="blank" >
                <img
                  src="${amazonLogo}"
                  alt="amazon"
                  class="amazon-logo"
                  width="62"
                  height="19"
                />
                </a>
                <a href="${book.buy_links[1].url}" target="_blank">
                <img
                  src="${appleLogo}"
                  alt="apple-book"
                  class="apple-logo"
                  width="33"
                  height="32"
                />
                </div>
                </div>
                </a>
                <button type="button" class="book-btn" data-id = "${book._id}">${buttonBasket}</button>
              
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

