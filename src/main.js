import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPictures } from './js/pixabay-api.js';
import appendCards from './js/render-functions.js';

const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-container'),
};

const hiddenClass = 'hidden';

const lightbox = new SimpleLightbox('.photo-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.searchQuery.value.trim();

  if (!searchQuery) {
    iziToast.error({
      position: 'topRight',
      message: 'Empty query!',
    });
    return;
  }

  refs.loader.classList.remove(hiddenClass);

  getPictures(searchQuery)
    .then(({ hits, totalHits }) => {
      if (totalHits === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      refs.gallery.innerHTML = '';
      appendCards(hits, refs.gallery);
      lightbox.refresh();
    })
    .catch(err =>
      iziToast.error({
        position: 'topRight',
        message: err.message,
      })
    )
    .finally(() => {
      form.reset();
      refs.loader.classList.add(hiddenClass);
    });
}
