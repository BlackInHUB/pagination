// GET
function onPageStart() {
  getMovies.resetPage();
  getMovies.getStartMovies().then(movies => {
    appendMoviesMarkup(movies.results);
    createPagination(movies.total_pages, 5);
  });

  pagContainer.addEventListener('click', paginate);

  function paginate(evt) {
    if (parseInt(evt.target.id) === getMovies.page) return;
    if (evt.target.classList.contains('pag-btn')) {
      getMovies.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      getMovies.getStartMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (
      evt.target.classList.contains('move-left') ||
      evt.target.classList.contains('move-right')
    ) {
      getMovies.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      getMovies.getStartMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (evt.target.classList.contains('to-start')) {
      getMovies.page = 1;
      clearGallery();
      loadFromTop();
      getMovies.getStartMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (evt.target.classList.contains('to-end')) {
      getMovies.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      getMovies.getStartMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
  }
}

function loadFromTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//SEARCH

export function onSearchFormSubmit(evt) {
  evt.preventDefault();

  searchMoviesApi.query = evt.currentTarget.elements.searchQuery.value;
  const query = searchMoviesApi.query.trim();

  if (query === '') {
    return Notify.failure(
      '😭 Sorry, there are no films matching your search query. Please try again.🙏'
    );
  } else if (query.length <= 2) {
    return Notify.failure(
      '🙅‍♂️ Sorry, there are too many films for your request, please enter more than 2 letters.🙏'
    );
  }

  searchMoviesApi.resetPage();
  searchMoviesApi.getSearchMovies().then(data => {
    const movies = data.results;

    clearGallery();

    if (movies.length === 0) {
      return Notify.failure(
        `🤷‍♀️ Sorry, there are no films with "${query}". Please try again.🙏`
      );
    }

    appendMoviesMarkup(movies);
    clearPagContainer();
    createPagination(data.total_pages, 5);
    if (movies.length === 1) {
      return Notify.success('😮 We have found only one film for your request.');
    }

    Notify.success(
      `🎉 Hooray! We have found "${data.total_results}" films with "${query}".🥳`
    );
  });

  pagContainer.addEventListener('click', paginate);

  function paginate(evt) {
    if (parseInt(evt.target.id) === searchMoviesApi.page) return;
    if (evt.target.classList.contains('pag-btn')) {
      searchMoviesApi.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      searchMoviesApi.getSearchMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (
      evt.target.classList.contains('move-left') ||
      evt.target.classList.contains('move-right')
    ) {
      searchMoviesApi.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      searchMoviesApi.getSearchMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (evt.target.classList.contains('to-start')) {
      searchMoviesApi.page = 1;
      clearGallery();
      loadFromTop();
      searchMoviesApi.getSearchMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
    if (evt.target.classList.contains('to-end')) {
      searchMoviesApi.page = parseInt(evt.target.id);
      clearGallery();
      loadFromTop();
      searchMoviesApi.getSearchMovies().then(movies => {
        appendMoviesMarkup(movies.results);
      });
    }
  }
}
