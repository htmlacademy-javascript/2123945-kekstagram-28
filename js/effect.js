const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'greyscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS [0];
let chosenEffect = DEFAULT_EFFECT;

// Предварительный просмотр изображения
const imageElement = document.querySelector('.img-upload__preview img');
// Наложение эффекта на изображение
const effectsElement = document.querySelector('.effects');
// Элемент, в котором надо создать слайдер
const sliderElement = document.querySelector('.effect-level__slider');
// Контейнер с эффектами
const sliderContainerElement = document.querySelector('.img-upload__effects');
// Поле ввода значения глубины эффекта, накладываемого на изображение
const effectLevelElement = document.querySelector('.effect-level__value');

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

// Функция, которая обрабатывает события слайдера (метод .updateOptions - срабатывает при инициализации слайдера - 118 строка)
const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  // метод .get получает текущее значение слайдера
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imageElement.style.filter = DEFAULT_EFFECT.style;
  } else {
    imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  effectLevelElement.value = sliderValue;
};

const resetEffects = () => {
  // зачем сбрасывать? чтобы потом обновить?
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

// Функция для создания слайдера
// Обращаемся к noUiSlider, вызываем метод .create и передаем: первым аргументом - куда вставляем слайдер, вторым - объект настроек
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
