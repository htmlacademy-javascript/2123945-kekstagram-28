import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { get } from 'browser-sync';
import { init, getFilteredPictures } from './filter.js';

setupForm();

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

// Эти функции подключила в form.js:
//import { sendData } from './api.js';
//import { showSuccessMessage } from './messages.js';

// Так в ретроспективе (у меня в form.js):

//setOnFormSubmit(async (data) => {
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
//  const debouncedRenderGallery = debounce(renderGallery);
//  init(data, debouncedRenderGallery);
//  renderGallery(getFilteredPictures());
//} catch (err) {
//  showAlert(err.message);
//}
