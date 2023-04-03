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

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
  }
}

export { showSuccessMessage };
