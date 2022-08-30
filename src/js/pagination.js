const pagContainer = document.querySelector('.pag-container');

function createPagination(totalPages, pagesShown) {
  if (totalPages <= 1) {
    return;
  }

  const startBtnsMarkup = `<div class="left-controls-container">
      <div id="1" class="to-start"></div>
      <div id="1" class="move-left">...</div>
  </div>
  <div class="pag-btns-container">
  </div>
  <div class="right-controls-container">
      <div id=${pagesShown + 1} class="move-right">...</div>
      <div id="" class="to-end"></div>
  </div>`;

  pagContainer.innerHTML = startBtnsMarkup;

  const pagBtnsContainer = document.querySelector('.pag-btns-container');

  const moveRightBtn = document.querySelector('.move-right');
  const moveLeftBtn = document.querySelector('.move-left');
  const toStartBtn = document.querySelector('.to-start');
  const toEndBtn = document.querySelector('.to-end');

  moveLeftBtn.classList.add('unvisible');
  toStartBtn.classList.add('unvisible');

  pagBtnsContainer.addEventListener('click', onPagBtnClick);
  moveRightBtn.addEventListener('click', onMoveRightBtnClick);
  moveLeftBtn.addEventListener('click', onMoveLeftBtnClick);
  toStartBtn.addEventListener('click', onStartBtnClick);
  toEndBtn.addEventListener('click', onEndBtnClick);

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
    toEndBtn.classList.add('unvisible');
  }

  toEndBtn.id = btnsArray.length - pagesShown + 1;
  toEndBtn.textContent = `${btnsArray.length + 1 - pagesShown}-${
    btnsArray.length
  }`;
  toStartBtn.textContent = `${btnsArray[0]}-${btnsArray[pagesShown - 1]}`;

  let current_page = 0;

  function appendPagBtnsMarkup(btnsArray, pagesShown, start) {
    pagBtnsContainer.innerHTML = '';

    let end = start + pagesShown;
    let btnsToRender = btnsArray.slice(start, end);
    const btnsMarkup = btnsToRender
      .map(btn => `<div id="${btn}" class="pag-btn">${btn}</div>`)
      .join('');

    pagBtnsContainer.innerHTML = btnsMarkup;

    const pagBtnsArray = document.querySelectorAll('.pag-btn');

    pagBtnsArray[0].classList.add('pag-btn-active');
  }

  appendPagBtnsMarkup(btnsArray, pagesShown, current_page);

  function onPagBtnClick(evt) {
    const activeBtn = document.querySelector('.pag-btn-active');

    if (evt.target.classList.contains('pag-btn-active')) return;

    evt.target.classList.add('pag-btn-active');
    activeBtn.classList.remove('pag-btn-active');
  }

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

    moveRightBtn.id = parseInt(moveRightBtn.id) + pagesShown;
    moveLeftBtn.id = moveRightBtn.id - pagesShown;

    appendPagBtnsMarkup(btnsArray, pagesShown, current_page);
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

    moveLeftBtn.id = parseInt(moveLeftBtn.id) - pagesShown;
    moveRightBtn.id = parseInt(moveRightBtn.id) - pagesShown;

    appendPagBtnsMarkup(btnsArray, pagesShown, current_page);
  }

  function onStartBtnClick() {
    current_page = 0;

    toStartBtn.classList.add('unvisible');
    moveLeftBtn.classList.add('unvisible');
    toEndBtn.classList.remove('unvisible');
    moveRightBtn.classList.remove('unvisible');
    appendPagBtnsMarkup(btnsArray, pagesShown, current_page);
    moveRightBtn.id = 1;
    moveLeftBtn.id = 1;
  }

  function onEndBtnClick() {
    current_page = btnsArray.length - pagesShown;

    toStartBtn.classList.remove('unvisible');
    moveLeftBtn.classList.remove('unvisible');
    toEndBtn.classList.add('unvisible');
    moveRightBtn.classList.add('unvisible');

    moveLeftBtn.id = parseInt(btnsArray.length) - pagesShown + 1;
    moveRightBtn.id = parseInt(moveLeftBtn.id) + pagesShown;

    appendPagBtnsMarkup(btnsArray, pagesShown, current_page);
  }
}

function clearPagContainer() {
  pagContainer.innerHTML = '';
}

createPagination(100, 5);
