import axios from 'axios';

export async function fetchTopBooks() {
  return await axios.get('https://books-backend.p.goit.global/books/top-books');
}

export async function fetchCategoriesList() {
  return await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
}

export async function fetchSelectedCategory(category) {
  return await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
}

export async function fetchBookDetails(bookId) {
  return await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
}
