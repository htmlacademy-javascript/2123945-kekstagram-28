// Сообщение о том, что отправка данных прошла успешно

const showSuccessMessageElement = document
  .querySelector('#success')
  .content.querySelector('.success');

const hideSuccessMessage = () => {
  showSuccessMessageElement.remove();
};

const onSuccessButtonClick = () => {
  hideSuccessMessage();
};

const successButton = showSuccessMessageElement.querySelector('.success__button');

const showSuccessMessage = () => {
  document.querySelector('body').append(showSuccessMessageElement);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Сообщение о том, что отправка данных прошла НЕ успешно

const showErrorMessageElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideErrorMessage = () => {
  showErrorMessageElement.remove();
};

const onErrorButtonClick = () => {
  hideErrorMessage();
};

const errorButton = showErrorMessageElement.querySelector('.error__button');

const showErrorMessage = () => {
  document.querySelector('body').append(showErrorMessageElement);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
    hideErrorMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
