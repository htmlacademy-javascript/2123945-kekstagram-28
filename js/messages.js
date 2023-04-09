// Сообщение о том, что отправка данных прошла успешно

const successMessageElement = document
  .querySelector('#success')
  .content.querySelector('.success');

const hideSuccessMessage = () => {
  successMessageElement.remove();
};

const onSuccessButtonClick = () => {
  hideSuccessMessage();
};

const onSuccessClickOutside = (evt) => {
  const successMessageInner = successMessageElement.querySelector('.success__inner');
  if (!successMessageInner.contains(evt.target)) {
    hideSuccessMessage();
  }
};

const successButton = successMessageElement.querySelector('.success__button');

// Сообщение о том, что отправка данных прошла НЕ успешно

const errorMessageElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideErrorMessage = () => {
  errorMessageElement.remove();
};

const onErrorClickOutside = (evt) => {
  const errorMessageInner = errorMessageElement.querySelector('.error__inner');
  if (!errorMessageInner.contains(evt.target)) {
    hideErrorMessage();
  }
};

const showSuccessMessage = () => {
  document.querySelector('body').append(successMessageElement);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onSuccessClickOutside);
};

const onErrorButtonClick = () => {
  hideErrorMessage();
};

const errorButton = errorMessageElement.querySelector('.error__button');

const showErrorMessage = () => {
  document.querySelector('body').append(errorMessageElement);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onErrorClickOutside);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
    hideSuccessMessage();
    hideErrorMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
