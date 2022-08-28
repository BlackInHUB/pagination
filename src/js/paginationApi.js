export default class pagination {
  constructor({ totalPages, pagesShown }) {
    this.totalPages = totalPages;
    this.pagesShown = pagesShown;
  }

  createPagination(totalPages, pagesShown) {
    const startBtnMarkup = `<div class="pag-btn start">На початок</div>`;
    const moveLeftBtnMarkup = `<div class="pag-btn move-left">...</div>`;
    const firstBtnMarkup = `<div class="pag-btn visible pag-btn-active">1</div>`;
    let pagBtnsArray = '';

    function makeBtnsArray(totalPages) {
      for (let i = 2; i <= totalPages; i += 1) {
        pagBtnsArray.push(i);
      }
      return pagBtnsArray;
    }

    makeBtnsArray(totalPages);

    const pagBtnsMarkup = pagBtnsArray
      .map(btn => `<div class="pag-btn visible">${btn.textContent}</div>`)
      .join('');
  }

  //   set newTotalPages(newTotalPages) {
  //     this.totalPages = newTotalPages;
  //   }

  //   set newPagesShown(newPagesShown) {
  //     this.pagesShown = newPagesShown;
  //   }
}

function onBtnClick(evt) {
    if (evt.target.classList.contains('pag-btn-active')) return;
    if (evt.target.class)
}