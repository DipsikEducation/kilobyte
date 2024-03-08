import { removeFromLocalStorage } from './localStorage.js';
import { getAllBooks } from './localStorage.js';
import amazonLogo from '../img/amazon.png';
import appleLogo from '../img/book.png';
import {} from '../js/refs.js';
import icon from '/img/noptimizesprite.svg';
import { updatePagination, PAGINATION, onPageChange } from './pagination.js';

const shoppingListRef = document.querySelector('#shopping-list');
const emptyShopListRef = document.querySelector('.box-bookslist');

checkLocalStorage();

function checkLocalStorage() {
  if (getAllBooks().length) {
    emptyShopListRef.classList.add('emptyShoppingList');
  } else emptyShopListRef.classList.remove('emptyShoppingList');
}

export function renderShoppingList(books) {
  const allBooksMarkup = (books || getAllBooks())
    .map(bookElem => markupShoppingList(bookElem))
    .join('');
  shoppingListRef.innerHTML = allBooksMarkup;
  const bloom = document.querySelector('#shopping-list');
  bloom.addEventListener('click', deleteFromShoppingList);
}

function deleteFromShoppingList(event) {
  if (!event.target.hasAttribute('id') === 'icon-deleteBtn') return;
  removeFromLocalStorage(event);
  checkLocalStorage();
  updatePagination();
}

function markupShoppingList(book) {
  return `<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${book._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="${icon}#icon-trash-03"></use>
      </svg>
    </button>
      <img src="${book.book_image}" alt="${book.title}" class="shopping-item-img">
      
    
    <div class="book-info-wrap">
      <p class="shopping-book-title break-text">${book.title}</p>
      <p class="shopping-book-category break-text">${book.list_name}</p>
      <p class="book-alt-text">${book.description}</p>
      <div class="author-shops-wrap">
        <p class="book-author">${book.author}</p>
        <div class="img-wrap shopping-img-wrap">
          <a href="${book.amazon_product_url}" target="blank">
            <img src="${amazonLogo}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="32" height="11">
          </a>
          <a href="${book.buy_links[1].url}" target="_blank">
            <img src="${appleLogo}" alt="apple-book" class="apple-logo shopping-apple-logo" width="16" height="16">
          </a>
        </div>
      </div>
    </div>
  </li>`;
}
window.addEventListener('resize', function () {
  addDisplayPropertyToSupportClass();
});

function addDisplayPropertyToSupportClass() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const supportElement = document.querySelector('.support');

  if (screenWidth > 1279 && supportElement) {
    supportElement.style.display = 'block';
  } else {
    supportElement.style.display = 'none';
  }
}

PAGINATION.pagination.on('afterMove', event => {
  onPageChange(event, renderShoppingList);
});
PAGINATION.pagination.movePageTo(1);

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const shopLink = document.querySelector('.header-nav-shop');

  if (currentPath.includes('shopinglist.html')) {
    shopLink.classList.add('is-active');
  }
});
