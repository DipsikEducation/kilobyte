import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderShoppingList } from './shoppingListRender';

const paginationElem = document.querySelector('#pagination1');
let pagination;

function initPagination() {
  console.log(window.screen.width);

  if (window.screen.width < 768) {
    options.itemsPerPage = 4;
    options.visiblePages = 2;
  }
  pagination = new Pagination('pagination1', options);
  const data = JSON.parse(localStorage.getItem('modal'));
  if (data.length < 3) {
    paginationElem.style.display = 'none';
  }
  pagination.setTotalItems(data.length);
  pagination.reset();
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

pagination.on('afterMove', event => {
  const currentPage = event.page - 1;
  const data = JSON.parse(localStorage.getItem('modal'));
  const startIndex = currentPage * options.itemsPerPage;
  const endIndex = startIndex + options.itemsPerPage;
  const bookList = data.slice(startIndex, endIndex);
  renderShoppingList(bookList);
});

pagination.movePageTo(1);
