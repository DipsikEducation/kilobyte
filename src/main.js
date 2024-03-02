import './js/support';
/*LIBRARIES
1. Axios
(docs) - https://www.npmjs.com/package/axios?activeTab=readme
2.izitoast
(docs) - https://www.npmjs.com/package/izitoast
3.tui-pagination
(docs) - https://www.npmjs.com/package/tui-pagination
4.Swiper 
(docs) - https://www.npmjs.com/package/swiper
*/
import { loadHomeBooks } from './js/homeRender';
loadHomeBooks();

if (localStorage.getItem('theme') === 'dark') {
  refs.themeCheckbox.checked = true;
  // Сюди треба навішати класи для темної теми або функцію яка це робитиме
}
/*-------------------CATEGORIES----------------------*/ 
import { categoriesSelected } from './js/categories';
categoriesSelected();

import { refs } from './js/refs.js';
import { onAddThemeLocalStorage } from './js/localStorage.js';
refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);

import { onBookClick, bookListRef } from './js/modalWindowFunctions.js';
bookListRef.addEventListener('click', onBookClick);

/*-----------------------SCROLL UP ----------------*/
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    refs.upButton.style.display = 'block';
  }
});
refs.upButton.addEventListener('click', () => {
  console.log('hello');
});

refs.upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  refs.upButton.style.display = 'none';
});


