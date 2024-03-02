const categoriesRef = document.querySelector('.categories__list');

categoriesRef.addEventListener('click', onCategoriesClick);

export async function onCategoriesClick(e) {
  e.preventDefault();
}

function categoriesSelected() {
  return new Promise(resolve => {
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
