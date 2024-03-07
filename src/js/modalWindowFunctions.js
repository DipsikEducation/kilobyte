import icon from '/img/noptimizesprite.svg';

export const bookListRef = document.querySelector('.home-categories-list');
const modalPlaceRef = document.querySelector('#modal');
import { fetchBookDetails } from './fetchAPI';
import { addToLocalStorage } from './localStorage.js';
import { getAllBooks } from './localStorage.js';
import amazonLogo from '../img/amazon.png';
import appleLogo from '../img/book.png';

let modalBtnCloseRef;

export async function onBookClick(event) {
  const clickedElement = event.target;
  const closestLi = clickedElement.closest('li');

  if (!closestLi.hasAttribute('id') || closestLi.id === null) return;
  document.querySelector('body').classList.add('no-scroll');

  const oneBookData = (await fetchBookDetails(closestLi.id)).data;

  modalPlaceRef.innerHTML = renderModalWindow(oneBookData);

  const listBtnRef = document.querySelector('.book-btn');
  const backdropRef = document.querySelector('#modal-open');
  modalBtnCloseRef = document.querySelector('#modal-btn-close');
  const buttonModalWrap = document.querySelector('.button-modal-wrap');

  backdropRef.addEventListener('click', closeModalWindow);
  modalBtnCloseRef.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindow);
  listBtnRef.addEventListener('click', event => {
    if (listBtnRef.dataset.state === 'add') {
      addToLocalStorage(event, oneBookData);
      listBtnRef.dataset.state = 'remove';
      listBtnRef.textContent = 'remove from the shopping list';
      buttonModalWrap.style.display = 'block';
    } else {
      listBtnRef.dataset.state = 'add';
      listBtnRef.textContent = 'add to shopping list';
      buttonModalWrap.style.display = 'none';
    }
  });
}

function renderModalWindow(book) {
  var buttonBasket;
  if (
    getAllBooks().find(b => {
      return b._id === book._id;
    })
  ) {
    buttonBasket = 'remove from the shopping list';
  } else buttonBasket = 'add to shopping list';
  return ` <div class="backdrop is-open" id="modal-open">
    <div class="modal-container">
    <div class="modal">
    <button type="button" class="modal-close-btn" id="modal-btn-close">
          <svg class="modal-btn-icon" width="16" height="16">
            <use href="${icon}#icon-x-close"></use>
          </svg>
        </button>
                <img class="book-img" src="${book.book_image}" alt="${book.title}">
                <div class="book-info-wrap">
                <p class="book-title-modal">${book.title}</p>
                <p class="book-author-modal">${book.author}</p>
                <p class="book-alt-text">${book.description}</p>
                <div class="img-wrap ">
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
                </div>
                  <button type="button" class="book-btn" data-id="${book._id}" data-state="add">${buttonBasket}</button>
                  <div class="button-modal-wrap" style="display: none"><p class="button-modal-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p></div>  
  </div>
  </div> `;
}

function closeModalWindow(event) {
  const backdropRef = document.querySelector('#modal-open');
  if (
    event.target === backdropRef ||
    event.target.closest('.modal-close-btn') ||
    event.key === 'Escape'
  ) {
    backdropRef.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');

    backdropRef.removeEventListener('click', closeModalWindow);
    modalBtnCloseRef.removeEventListener('click', closeModalWindow);
    document.removeEventListener('keydown', closeModalWindow);
  }
}
