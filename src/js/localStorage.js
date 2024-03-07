import { refs } from './refs';
import {} from './modalWindowFunctions.js';
const LOCAL_STORAGE_KEY = 'modal';

export function onAddThemeLocalStorage() {
  if (refs.themeCheckbox.checked) {
    localStorage.setItem('theme', 'dark');
    // Сюди треба навішати класи для темної теми або функцію яка це робитиме
     document.body.classList.add('dark-theme');  
  } else {
    localStorage.removeItem('theme');
    // Тут треба видалити класи темної теми або створити функцію яка це робитиме
     document.body.classList.remove('dark-theme');
  }
}

export function addToLocalStorage(event, oneBookData) {
  if (event.target.textContent === 'remove from the shopping list') {
    removeFromLocalStorage(event);
    return;
  }
  if (!event.target.classList.contains('book-btn')) return;
  const booksArray = getAllBooks();
  booksArray.push(oneBookData);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(booksArray));
  checkLocalBook(event);
}
export function getAllBooks() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function checkLocalBook(event) {
  const booksArray = getAllBooks();
  const currentBookId = event.target.dataset.id;
  if (booksArray.find(book => book._id === currentBookId)) {
    const listBtnRef = event.target;
    listBtnRef.textContent = 'remove from the shopping list';
  }
}
export function removeFromLocalStorage(event) {
  const notesArray = getAllBooks();
  const id = notesArray.findIndex(elem => {
    return elem._id === event.target.dataset.id;
  });

  if (id === undefined || id === -1) return;
  notesArray.splice(id, 1);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesArray));
  event.target.textContent = 'add to shopping list';
}
