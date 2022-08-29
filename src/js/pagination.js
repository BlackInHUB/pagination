const pagContainer = document.querySelector('.pag-container');

function createPagination(totalPages, pagesShown) {
  const startBtnsMarkup = `<div class="left-controls-container"><div class="to-start">На початок</div><div class="move-left">...</div></div><div class="pag-btns-container"></div><div class="right-controls-container"><div class="move-right">...</div><div class="to-end">В кінець</div></div>`;

  pagContainer.innerHTML = startBtnsMarkup;

  const pagBtnsContainer = document.querySelector('.pag-btns-container');

  const moveRightBtn = document.querySelector('.move-right');
  const moveLeftBtn = document.querySelector('.move-left');
  const toStartBtn = document.querySelector('.to-start');
  const toEndBtn = document.querySelector('.to-end');

  let current_page = 0;

  moveLeftBtn.classList.add('unvisible');
  toStartBtn.classList.add('unvisible');

  pagBtnsContainer.addEventListener('click', onBtnClick);

  function createBtnsArray(value) {
    let array = [];
    for (let i = 1; i <= value; i += 1) {
      array.push(i);
    }
    return array;
  }

  const btnsArray = createBtnsArray(totalPages);
  if (btnsArray.length <= pagesShown) {
    moveRightBtn.classList.add('unvisible');
  }

  function appendStartPagBtnsMarkup(btnsArray, pagesShown, start) {
    pagBtnsContainer.innerHTML = '';

    let end = start + pagesShown;
    let btnsToRender = btnsArray.slice(start, end);

    const btnsMarkup = btnsToRender
      .map(
        btn =>
          `<div class="pag-btn numbered-peg-btn data-action="listPage">${btn}</div>`
      )
      .join('');

    pagBtnsContainer.innerHTML = btnsMarkup;

    const numberedBtnsArray = document.querySelectorAll('.numbered-peg-btn');

    numberedBtnsArray[0].classList.add('pag-btn-active');
  }

  appendStartPagBtnsMarkup(btnsArray, pagesShown, current_page);

  function onBtnClick(evt) {
    const activeBtn = document.querySelector('.pag-btn-active');

    if (!evt.target.classList.contains('pag-btn')) return;

    activeBtn.classList.remove('pag-btn-active');
    evt.target.classList.add('pag-btn-active');
  }

  moveRightBtn.addEventListener('click', onMoveRightBtnClick);
  moveLeftBtn.addEventListener('click', onMoveLeftBtnClick);

  function onMoveRightBtnClick() {
    toStartBtn.classList.remove('unvisible');
    current_page += pagesShown;

    if (current_page >= pagesShown * 2) {
      moveLeftBtn.classList.remove('unvisible');
    }

    if (current_page + pagesShown * 2 > btnsArray.length) {
      moveRightBtn.classList.add('unvisible');
    }

    if (current_page + pagesShown > btnsArray.length) {
      toEndBtn.classList.add('unvisible');
    }

    appendStartPagBtnsMarkup(btnsArray, pagesShown, current_page);
    console.log(current_page);
  }

  function onMoveLeftBtnClick() {
    current_page -= pagesShown;
    moveRightBtn.classList.remove('unvisible');
    toEndBtn.classList.remove('unvisible');

    if (current_page <= pagesShown) {
      moveLeftBtn.classList.add('unvisible');
    }

    if (current_page <= 0) {
      toStartBtn.classList.add('unvisible');
    }

    appendStartPagBtnsMarkup(btnsArray, pagesShown, current_page);
  }

  toEndBtn.addEventListener('click', function () {
    current_page = btnsArray.length - pagesShown;

    toStartBtn.classList.remove('unvisible');
    moveLeftBtn.classList.remove('unvisible');
    toEndBtn.classList.add('unvisible');
    moveRightBtn.classList.add('unvisible');

    appendStartPagBtnsMarkup(btnsArray, pagesShown, current_page);
  });

  toStartBtn.addEventListener('click', function () {
    current_page = 0;

    toStartBtn.classList.add('unvisible');
    moveLeftBtn.classList.add('unvisible');
    toEndBtn.classList.remove('unvisible');
    moveRightBtn.classList.remove('unvisible');
    appendStartPagBtnsMarkup(btnsArray, pagesShown, current_page);
  });
}

createPagination(22, 5);
