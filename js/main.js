import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { init, getFilteredPictures } from './filter.js';
import './upload-images.js';


setupForm();

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
