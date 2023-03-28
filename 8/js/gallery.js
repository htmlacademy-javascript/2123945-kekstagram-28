import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    //находит ближайший к курсору элемент с [data-thumbnail-id]
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    // если клик мимо - то прекращаем работу функции
    if(!thumbnail) {
      return;
    }
    evt.preventDefault();

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId);
    showBigPicture(picture);
  });

  renderThumbnails(pictures, container);
};

export { renderGallery };
