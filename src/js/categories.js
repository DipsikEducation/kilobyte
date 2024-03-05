import { refs } from './refs';
import { LoadHomeCategory } from '/js/homeCatRender.js';
import { loadHomeBooks } from './homeRender';
import { baseHomeTitle } from './homeCatRender';

refs.categoriesRef.addEventListener('click', categoriesSelected);

export function categoriesSelected(event) {
  if (
    !event ||
    !event.target ||
    !event.target.classList.contains('categories__item')
  ) {
    return;
  }

  const selectedCategory = event.target;

  if (selectedCategory.dataset.category === 'all categories') {
    const allCategories = Array.from(selectedCategory.parentElement.children);

    allCategories.forEach(category => {
      category.classList.remove('selected');
    });

    selectedCategory.classList.add('selected');

    loadHomeBooks();
    baseHomeTitle();
  } else {
    const allCategories = Array.from(selectedCategory.parentElement.children);

    allCategories.forEach(category => {
      category.classList.remove('selected');
    });

    selectedCategory.classList.add('selected');

    LoadHomeCategory(selectedCategory.dataset.category);
  }
}

// function addSelectedClass() {
//   const buttons = document.querySelectorAll('.button.see-more');
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       const category = button.dataset.js;
//       const categoryElement = document.querySelector(
//         `.categories__item[data-category="${category}"]`
//       );
//       if (categoryElement) {
//         const alreadySelected = categoryElement.classList.contains('selected');
//         if (!alreadySelected) {
//           categoryElement.classList.add('selected');
//         }
//       }
//     });
//   });
// }

// addSelectedClass();
