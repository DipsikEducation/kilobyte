// './img/noptimizesprite.svg#icon-align-left' 10 stroke
import { refs } from './refs';
import sprite from '/img/noptimizesprite.svg'
console.log('~ sprite', `${sprite}#icon-align-left`)

export function toggleModal() {
  if (refs.modal.style.display === 'block') {
    refs.modal.style.display = 'none';
    refs.modalImage.setAttribute(
      'href',`${sprite}#icon-align-left`
    );
  } else {
    refs.modal.style.display = 'block';
    refs.modalImage.setAttribute(
      'href',
      './img/noptimizesprite.svg#icon-x-close'
    );
  }
}

// 1) В файлі style.css розкоментуй 22-й рядок (@import url(./modalburger.css);)

// 2) В файлі index.html розкоментуй 31-й рядок (<load src="partials/modalburger.html" />)

// 3) Це треба додати в файл refs.js - burgerBtn: document.querySelector('#icon-align-left'),
// burgerCont: document.querySelector('.backdrop'),
// body: document.querySelector('body'),
// modal: document.querySelector('.burg-cont'),
// modalImage: document.querySelector('#modal-burger-btn'),

// 4) В файлі main.js розкоментуй 15-й рядок (import { toggleModal } from './js/modalburger.js';)

// 5) Це треба додати в файл main.js (refs.burgerBtn.addEventListener('click', () => {
// refs.burgerCont.classList.toggle('is-open');
// refs.body.classList.toggle('modal-open');
// toggleModal();
// });)
