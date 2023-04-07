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

const successButton = successMessageElement.querySelector('.success__button');

const showSuccessMessage = () => {
  document.querySelector('body').append(successMessageElement);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Сообщение о том, что отправка данных прошла НЕ успешно

const errorMessageElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideErrorMessage = () => {
  errorMessageElement.remove();
};

const onErrorButtonClick = () => {
  hideErrorMessage();
};

//  закрывай модалку и делай stopPropagation для события:

const onClickOutside = (evt) => {
  if (!errorMessageElement.contains(evt.target)) {
    hideErrorMessage();
    evt.stopPropagation();
  }
};

const errorButton = errorMessageElement.querySelector('.error__button');

const showErrorMessage = () => {
  document.querySelector('body').append(errorMessageElement);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onClickOutside);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
    hideErrorMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
