// Находим темплейт из index.html
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

// Создаем полную копию темплейта и "набиваем" его атрибуты новыми значениями, чтобы сделать уникальным
const createThumbnail = (picture) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = picture.url;
  thumbnail.querySelector('.picture__img').alt = picture.description;
  thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;
  thumbnail.dataset.thumbnailId = picture.id;

  // Возвращаем новую уникальную миниатюру
  return thumbnail;
};

const renderThumbnails = (pictures) => {
  // Создаем новую обертку для thumbnails
  const fragment = document.createDocumentFragment();
  // На каждой итерации цикла - присваеваем новые значения атрибутов и получаем новую миниатюру
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    // Добавляем ее в обертку - fragment
    fragment.append(thumbnail);
  });
  // Вставляем fragment в container
  container.append(fragment);
};

export { renderThumbnails };
