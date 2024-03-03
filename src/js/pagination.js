import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const paginationElem = document.querySelector('#pagination1');

function initPagination() {
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
  visiblePages: 2,
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

const pagination = new Pagination('pagination1', options);
initPagination();

pagination.on('afterMove', event => {
  const currentPage = event.page - 1;
  const data = JSON.parse(localStorage.getItem('modal'));
  const startIndex = currentPage * 3;
  const endIndex = startIndex + 3;
  const bookList = data.slice(startIndex, endIndex);
  console.log(bookList);
});
