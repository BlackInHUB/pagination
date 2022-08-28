import pagination from './pagination';
const pagContainer = document.querySelector('.pag-container');

function createPagination(totalPages, pagesShown) {
  const startBtnMarkup = `<div class="pag-btn to-start">На початок</div>`;
  const moveLeftBtnMarkup = `<div id="${pagesShown}" class="pag-btn move-left">...</div>`;
  const firstBtnMarkup = `<div class="pag-btn unvisible pag-btn-active" data-action="listPage">1</div>`;
  const moveRightBtnMarkup = `<div id="${pagesShown}" class="pag-btn move-right">...</div>`;
  const endBtnMarkup = `<div class="pag-btn to-end">В кінець</div>`;
  let pagBtnsArray = [];

  function makeBtnsArray(totalPages) {
    for (let i = 2; i <= totalPages; i += 1) {
      pagBtnsArray.push(i);
    }
    return pagBtnsArray;
  }

  makeBtnsArray(totalPages);

  const pagBtnsMarkup = pagBtnsArray
    .map(
      btn =>
        `<div class="pag-btn unvisible" data-action="listPage">${btn}</div>`
    )
    .join('');

  const paginationMarkup =
    startBtnMarkup +
    moveLeftBtnMarkup +
    firstBtnMarkup +
    pagBtnsMarkup +
    moveRightBtnMarkup +
    endBtnMarkup;

  pagContainer.innerHTML = paginationMarkup;

  const numberedBtns = document.querySelectorAll('[data-action="listPage"]');
  //   console.log(numberedBtns);

  for (let i = 0; i < pagesShown; i += 1) {
    numberedBtns[i].classList.remove('unvisible');
  }

  pagContainer.addEventListener('click', onBtnClick);

  const perPageCounter = totalPages / pagesShown;
  console.log(perPageCounter);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  function onBtnClick(evt) {
    console.log(numberedBtns);
    if (!evt.target.classList.contains('pag-btn')) return;
    if (evt.target.classList.contains('pag-btn-active')) return;

    const activeBtn = document.querySelector('.pag-btn-active');

    if (
      evt.target.classList.contains('to-start') ||
      evt.target.classList.contains('move-left') ||
      evt.target.classList.contains('move-right') ||
      evt.target.classList.contains('to-end')
    ) {
      return;
    } else {
      activeBtn.classList.remove('pag-btn-active');
      evt.target.classList.add('pag-btn-active');
    }
  }
}

createPagination(20, 5);
