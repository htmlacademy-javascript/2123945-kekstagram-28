import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хэштеги';

// Форма
const form = document.querySelector('.img-upload__form');
// Редактировать изображение
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// Кнопка закрытия формы редактирования изображения
const cancelButton = document.querySelector('#upload-cancel');
// Загрузить изображение
const fileField = document.querySelector('#upload-file');
// Добавить хэш-теги
const hashtagField = document.querySelector('.text__hashtags');
// Добавить комментарии
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

// Проверяет каждый тег на соответствие регулярному выражению
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

// Проверяет, что кол-во хэштегов до 5
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  // Set создает коллекцию из неповторяющихся элементов на основе массива lowerCaseTags
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// Значение value передает библиотека pristine = текущее значение
const validateTags = (value) => {
  // собираем в массив валидные хэштеги
  const tags = value
    // хэштег обрезается в начале и конце
    .trim()
    // хэштеги разделяются пробелами
    .split(' ')
    // хэштег обрезается в начале и конце
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  // поле, которое валидируем
  hashtagField,
  // функция-валидатор
  validateTags,
  // текст ошибки
  TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
