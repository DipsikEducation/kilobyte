import { refs } from './refs';

export function onAddThemeLocalStorage() {
  if (refs.themeCheckbox.checked) {
    localStorage.setItem('theme', 'dark');
    // Сюди треба навішати класи для темної теми або функцію яка це робитиме
  } else {
    localStorage.removeItem('theme');
    // Тут треба видалити класи темної теми або створити функцію яка це робитиме
  }
}

// Додай цю перевірку в файл main.js на самому початку.
// if (localStorage.getItem('theme') === 'dark') {
//   refs.themeCheckbox.checked = true;
//   // Сюди треба навішати класи для темної теми або функцію яка це робитиме
// }

// Додай слухач подій для кнопки зміни тем
// refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);
