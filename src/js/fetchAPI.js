import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function fetchTopBooks() {
  return await axios.get(`${BASE_URL}top-books`);
}

export async function fetchCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}

export async function fetchSelectedCategory(category) {
  return await axios.get(`${BASE_URL}category?category=${category}`);
}

export async function fetchBookDetails(bookId) {
  return await axios.get(`${BASE_URL}${bookId}`);
}
