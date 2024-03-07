import { refs } from './refs';
import { LoadHomeCategory } from '/js/homeCatRender.js';
import { loadHomeBooks } from './homeRender';
import { baseHomeTitle } from './homeCatRender';

refs.categoriesRef.addEventListener('click', categoriesSelected);

export function categoriesSelected(event) {
  event.preventDefault();

  const clickedLink = event.target.closest('a');

  if (
    !clickedLink ||
    !clickedLink.parentElement.classList.contains('categories__item')
  ) {
    return;
  }

  const selectedCategory = clickedLink.parentElement;

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
