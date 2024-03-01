export const refs = {
  themeCheckbox: document.querySelector('#theme-switch'),
};

refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);
