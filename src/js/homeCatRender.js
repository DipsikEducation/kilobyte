import { fetchSelectedCategory } from './fetchAPI';
import { seeMoreBtn, categoriesList, loadHomeBooks } from './homeRender';
import iziToast from 'izitoast';
let listForRender;
const sectionTitle = document.querySelector('.main-category-title');

export function LoadHomeCategory(data) {
  const categoryTitle = data;
  console.log(data);
  fetchSelectedCategory(categoryTitle)
    .then(category => {
      if (Object.keys(category.data).length !== 0) {
        categoriesList.innerHTML = '';
        renderCategoryBooks(category.data, categoryTitle);
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
        // ...optionsIziToastError
      });
    });
}
function renderCategoryBooks(category, listName) {
  categoriesList.insertAdjacentHTML(
    'afterbegin',
    `<ul class="category-books-list"></ul>`
  );
  listForRender = document.querySelector('.category-books-list');
  const markupCategoryBooks = category
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
  listForRender.insertAdjacentHTML('beforeend', markupCategoryBooks);
  listForRender.insertAdjacentHTML(
    'afterend',
    `<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>`
  );
  let allCatBtn = document.querySelector('.all-cat-btn');
  allCatBtn.addEventListener('click', function () {
    const currentSelected = document.querySelector(
      '.categories__item.selected'
    );
    if (currentSelected) {
      currentSelected.classList.remove('selected');
    }
    const allCategories = document.querySelector(
      '[data-category="all categories"]'
    );
    allCategories.classList.add('selected');
  });
  listenAllCatBtn(allCatBtn);
  const titleArr = listName.split(' ');
  if (titleArr.length > 3) {
    const middleWord = titleArr[Math.round((titleArr.length - 1) / 2)];
    let forTitle = listName.split(middleWord).join(' ');
    forTitle = forTitle.replace(
      titleArr[titleArr.length - 1],
      `<span class="main-category-title-span">${
        titleArr[titleArr.length - 1]
      }</span>`
    );
    sectionTitle.innerHTML = forTitle;
  } else {
    listName = listName.replace(
      titleArr[titleArr.length - 1],
      `<span class="main-category-title-span">${
        titleArr[titleArr.length - 1]
      }</span>`
    );
    sectionTitle.innerHTML = listName;
  }
}
export function listenAllCatBtn(allCatBtn) {
  allCatBtn.addEventListener('click', () => {
    loadHomeBooks();
    baseHomeTitle();
  });
}
export function baseHomeTitle() {
  sectionTitle.innerHTML = `Best Sellers <span class="main-category-title-span">Books</span>`;
}
