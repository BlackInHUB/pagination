import pagination from './pagination';
const pagContainer = document.querySelector('.pag-container');

function createPagination(totalPages, pagesShown, startPage) {
  const startBtnsMarkup = `<div class="left-constrols-container"><div class="pag-btn to-start">На початок</div><div id="${pagesShown}" class="pag-btn move-left">...</div></div><div class="pag-btns-container"></div><div class="right-controls-container"><div id="${pagesShown}" class="pag-btn move-right">...</div><div class="pag-btn to-end">В кінець</div></div>`;

  pagContainer.innerHTML = startBtnsMarkup;

  const pagBtnsContainer = document.querySelector('.pag-btns-container');
  const letftControlsContainer = document.querySelector(
    '.letft-controls-container'
  );
  const rightControlsContainer = document.querySelector(
    '.right-controls-container'
  );

  let btnsArray = [];
  let current_page = startPage;
  let firstPage = startPage;
  let lastPage = pagesShown;

  console.log(firstPage, lastPage);

  function createBtnsArray(value) {
    for (let i = 1; i <= value; i += 1) {
      btnsArray.push(i);
    }
    return btnsArray;
  }

  createBtnsArray(totalPages);

  const numberedBtnsContainer = document.querySelector('.pag-btns-container');

  function appendPagBtnsMarkup(array, counter, page) {
    pagBtnsContainer.innerHTML = '';
    // page--;

    let start = counter * page;
    let end = start + counter;
    let btnsToRender = array.slice(start, end);

    for (let i = 0; i < btnsToRender.length; i += 1) {
      let btn = array[i];
      let btnMarkup = `<div class="pag-btn numbered-peg-btn data-action="listPage">${btn}</div>`;

      numberedBtnsContainer.insertAdjacentHTML('beforeend', btnMarkup);

      const numberedBtnsArray = document.querySelectorAll('.numbered-peg-btn');

      numberedBtnsArray[0].classList.add('pag-btn-active');
    }
  }

  appendPagBtnsMarkup(btnsArray, pagesShown, current_page);

  pagBtnsContainer.addEventListener('click', onBtnClick);

  function onBtnClick(evt) {
    const activeBtn = document.querySelector('.pag-btn-active');

    if (!evt.target.classList.contains('pag-btn')) return;

    activeBtn.classList.remove('pag-btn-active');
    evt.target.classList.add('pag-btn-active');
  }

  rightControlsContainer.addEventListener('click', onRightControlsClick);

  function onRightControlsClick(evt) {
    console.log(evt.target);

    if (evt.target.classList.contains('.move-right')) {
      current_page = startPage + pagesShown;

      appendPagBtnsMarkup(btnsArray, pagesShown, current_page);
    }
  }
}

createPagination(20, 5, 1);
