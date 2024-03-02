// Додай код з 3 по 18 рядки в main.js

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

// Це додай в файл refs.js в об'єкт refs
//  upButton: document.querySelector('.up-button'),

// І підключи в загальний css файл
// @import url(./scrollUp.css);
