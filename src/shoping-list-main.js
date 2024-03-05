import './js/shoppingListRender'
import './js/support'
import "./js/pagination"
import './js/theme.js'

import { refs } from './js/refs';
import { onAddThemeLocalStorage } from './js/localStorage';
import { toggleModal } from './js/modalburger.js';

// Темна тема
if (localStorage.getItem('theme') === 'dark') {
  refs.themeCheckbox.checked = true;
  document.body.classList.add('dark-theme');
}

refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);

// Бургер меню

refs.burgerBtn.addEventListener('click', () => {
  refs.burgerCont.classList.toggle('is-open-burger');
  refs.body.classList.toggle('modal-open-burger');
  toggleModal();
});