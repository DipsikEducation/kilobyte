import { fetchTopBooks } from './fetchAPI';
import { LoadHomeCategory } from './homeCatRender';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export { seeMoreBtn, categoriesList };
const categoriesList = document.querySelector('.home-categories-list');
let seeMoreBtn;

//  loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.style.display = 'none';
});

//  loader

const toastOptions = {
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  position: 'topRight',
  timeout: 3000,
  progressBar: false,
};

const optionsIziToastWarning = {
  ...toastOptions,
  message: 'none',
  backgroundColor: '#FFA000',
};

const optionsIziToastError = {
  ...toastOptions,
  backgroundColor: '#EF4040',
  maxWidth: 400,
};

export function loadHomeBooks() {
  fetchTopBooks()
    .then(categories => {
      if (Object.keys(categories.data).length !== 0) {
        categoriesList.innerHTML = '';
        renderHomeCategories(categories.data);
      } else {
        categoriesList.innerHTML = '';
        iziToast.error({
          message: 'Sorry, there are no books to render',
          position: `topRight`,
        });
      }
    })
    .catch(error => {
      console.log('Error loading data:', error);
      iziToast.info({
        message: 'Sorry, there are no books to render',
        position: `topRight`,
        timeout: 3000,
        progressBar: false,
        title: 'Error',
        ...optionsIziToastError,
      });
    });
}
function renderHomeCategories(categories) {
  const markupCategories = categories
    .map(category => {
      return `
        <li class="home-categories-item">
        <h3 class="home-category-title">${category.list_name}</h3>
        <ul class="home-books-list">${renderHomeBooks(category.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${
              category.list_name
            }">See more</button>
        </div>
        </li>`;
    })
    .join('');
  categoriesList.insertAdjacentHTML('beforeend', markupCategories);
  seeMoreBtn = document.querySelectorAll('.see-more');
  seeMoreBtn.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.js;
      const categoryElement = document.querySelector(
        `.categories__item[data-category="${category}"]`
      );
      if (categoryElement) {
        document
          .querySelectorAll('.categories__item.selected')
          .forEach(selectedCategory => {
            selectedCategory.classList.remove('selected');
          });
        categoryElement.classList.add('selected');
      }
    });
  });
  seeMoreListener();
}
function renderHomeBooks(books) {
  return books
    .map(book => {
      return `
        <li class="home-books-item" id="${book._id}">
            <div class="image-overlay">
                <img class="book-image" src="${book.book_image}" alt="${book.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${book.title}</p>
                <p class="book-author">${book.author}</p>
            </div>
        </li>`;
    })
    .join('');
}
function seeMoreListener() {
  for (let btns of seeMoreBtn) {
    btns.addEventListener('click', () =>
      LoadHomeCategory(btns.getAttribute('data-js'))
    );
  }
}
