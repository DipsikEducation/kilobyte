import { removeFromLocalStorage } from './localStorage.js';
import { getAllBooks } from './localStorage.js';
import amazonLogo from '../img/amazon.png';
import appleLogo from '../img/book.png';
import {} from '../js/refs.js';
const shoppingListRef = document.querySelector('#shopping-list');
const emptyShopListRef = document.querySelector('.box-bookslist');

checkLocalStorage();

function checkLocalStorage() {
  if (getAllBooks().length) {
    emptyShopListRef.classList.add('emptyShoppingList');
  } else emptyShopListRef.classList.remove('emptyShoppingList');
}

window.addEventListener('load', renderShoppingList);

function renderShoppingList() {
  const allBooksMarkup = getAllBooks()
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
  renderShoppingList();
}

function markupShoppingList(book) {
  return `<li class="shopping-list-item">
    <button type="button" class="icon-deleteBtn" data-id="${book._id}">
      <svg class="icon-trash" id="icon-trash-03" width="28" height="28">
        <use href="/img/noptimizesprite.svg#icon-trash-03"></use>
      </svg>
    </button>
      <img src="${book.book_image}" alt="${book.title}" class="shopping-item-img">
      
    
    <div class="book-info-wrap">
      <p class="book-title shopping-book-title break-text">${book.title}</p>
      <p class="shopping-book-category break-text">${book.list_name}</p>
      <p class="book-alt-text">${book.description}</p>
      <div class="author-shops-wrap">
        <p class="book-author">${book.author}</p>
        <div class="img-wrap shopping-img-wrap">
          <a href="${book.amazon_product_url}" target="blank">
            <img src="${amazonLogo}" alt="amazon-logo" class="amazon-logo shopping-amazon-logo" width="62" height="19">
          </a>
          <a href="${book.buy_links[1].url}" target="_blank">
            <img src="${appleLogo}" alt="apple-book" class="apple-logo shopping-apple-logo" width="33" height="32">
          </a>
        </div>
      </div>
    </div>
  </li>`;
}
window.addEventListener('resize', function() {
    addDisplayPropertyToSupportClass();
});

function addDisplayPropertyToSupportClass() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const supportElement = document.querySelector('.support');

    if (screenWidth > 1440 && supportElement) {
        supportElement.style.display = 'block';
    } else {
        supportElement.style.display = 'none';
    }
}
