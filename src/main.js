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
if (localStorage.getItem('theme') === 'dark') {
    refs.themeCheckbox.checked = true;
    // Сюди треба навішати класи для темної теми або функцію яка це робитиме
}

import { loadHomeBooks } from './js/homeRender';
loadHomeBooks();

import { onCategoriesClick } from './js/categories';
onCategoriesClick();