import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const PAGINATION = {
  pagination: null,
};

const paginationElem = document.querySelector('#pagination1');

function initPagination() {
  // console.log(window.screen.width);

  if (window.screen.width < 768) {
    options.itemsPerPage = 4;
    options.visiblePages = 2;
  }
  PAGINATION.pagination = new Pagination('pagination1', options);
  const data = JSON.parse(localStorage.getItem('modal'));
  if (data.length < 3) {
    paginationElem.style.display = 'none';
  }
  PAGINATION.pagination.setTotalItems(data.length);
  PAGINATION.pagination.reset();
}

const options = {
  totalItems: 10,
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

initPagination();

export function onPageChange(event, callback) {
  const currentPage = event.page - 1;
  const data = JSON.parse(localStorage.getItem('modal'));
  const startIndex = currentPage * options.itemsPerPage;
  const endIndex = startIndex + options.itemsPerPage;
  const bookList = data.slice(startIndex, endIndex);
  callback(bookList);
}

export function updatePagination() {
  const data = JSON.parse(localStorage.getItem('modal')) || [];
  const currentPage = PAGINATION.pagination.getCurrentPage();
  const maxPage = Math.ceil(data.length / options.itemsPerPage);
  const page = currentPage > maxPage ? maxPage : currentPage;
  PAGINATION.pagination.setTotalItems(data.length);
  PAGINATION.pagination.reset();
  PAGINATION.pagination.movePageTo(page);
  if (data.length <= 3) {
    paginationElem.classList.add('hidden');
  } else {
    paginationElem.classList.remove('hidden');
  }
}
updatePagination();
