const FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png'];

const fileField = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

fileField.addEventListener('change', () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});


// по селектору ищу все картинки, qsAll
// for each и записываю в scr то,
// что вернет create object url
