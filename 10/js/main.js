import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';

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
