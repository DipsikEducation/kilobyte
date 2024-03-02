import { refs } from './refs';

refs.categoriesRef.addEventListener('click', categoriesSelected);

export async function categoriesSelected() {
  return await new Promise(resolve => {
    document
      .getElementById('scrollableList')
      .addEventListener('click', function (e) {
        const selectedCategory = e.target;
        if (!selectedCategory.classList.contains('categories__item')) {
          return;
        }

        const allCategories = Array.from(this.children);

        allCategories.forEach(category => {
          category.classList.remove('selected');
          category.textContent = category.dataset.originalText;
        });

        selectedCategory.classList.add('selected');
        selectedCategory.textContent =
          selectedCategory.textContent.toUpperCase();
        resolve(selectedCategory);
      });
  });
}

categoriesSelected().then(selectedCategory => {});
