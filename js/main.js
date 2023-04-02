// getPictures удалить? чтобы брать с сервера?
//import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { getData, sendData } from './api.js';

renderGallery(getPictures());
setupForm();

// import { renderGallery } from './gallery.js';
// import { getData, sendData } from './api.js';
// import { showAlert } from './utils.js';
// import { setupForm, hideModal } from './form.js';
// import { showSuccessMessage, showErrorMessage } from './message.js';

// setOnFormSubmit(async (data) => {
//  try {
//    await sendData(data);
//    hideModal();
//    showSuccessMessage();
//  } catch {
//    showErrorMessage();
//  }
//});

//try {
//  const data = await getData();
//  renderGallery(data);
//} catch (err) {
//  showAlert(err.message);
//}


// Из демки про волшебников

import {renderGallery} from './gallery.js';

const SIMILAR_PICTURES = 25;

fetch('https://28.javascript.pages.academy/kekstagram')
  .then((response) => response.json())
  .then((pictures) => {
    renderGallery(pictures.slice(0, SIMILAR_PICTURES));
  });
