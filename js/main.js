import { getPictures } from './data.js';
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
