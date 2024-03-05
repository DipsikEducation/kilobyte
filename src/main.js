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

import './js/support';
import './js/theme.js'

import { toggleModal } from './js/modalburger.js';  

refs.burgerBtn.addEventListener('click', () => {
refs.burgerCont.classList.toggle('is-open-burger');
refs.body.classList.toggle('modal-open-burger');
toggleModal();
});

if (localStorage.getItem('theme') === 'dark') {
  refs.themeCheckbox.checked = true;
  // Сюди треба навішати класи для темної теми або функцію яка це робитиме
  document.body.classList.add('dark-theme');
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
  } else {
     refs.upButton.style.display = 'none';
  }
});


refs.upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});




