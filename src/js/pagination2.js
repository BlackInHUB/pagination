import { items } from './items';

const pagContainer = document.querySelector('.pag-container');
const list = document.querySelector('list');

let current_page = 1;
let rows = 5;

function displayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginated_items = items.slice(start, end);

  for (let i = 0; i < paginated_items; i += 1) {
    let item = items[i];
    let item_element = document.createElement('div');
    item_element.classList.add('list_item');
  }
}
