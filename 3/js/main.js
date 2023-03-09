// Напишите функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта:
// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Первый раз - в первый класс! #school #memories',
  'Осень, осень, ну давай у листьев спросим...',
  'Рецепт шарлотки - 4 яйца, 1 стакан муки, 1 стакан сахара и 4 яблока. Все смешать и в духовку на 40 минут.',
  'Однажды на даче #камин #отдых #уют',
  'В нашей семье пополнение - новый друг - пушистик Лакки #goldenretriever',
  'Дети - цветы жизни #любовь #семья #счастье',
  'Наши веселые будни #прогулка #радость #мокрыелапы'
];

const NAMES = [
  'Никита',
  'Арина',
  'Артемий',
  'Ольга',
  'Виктор',
  'Елизавета',
  'Даниил',
  'Анастасия',
  'Роман',
  'Мия',
  'Евгений',
  'Наталья',
  'Ярослав',
  'Надежда',
  'Александр',
  'Лолита',
  'Дмитрий',
  'Вера',
  'Андрей',
  'Анжелика',
  'Вячеслав',
  'Любовь',
  'Максим',
  'Лариса',
  'Дамир',
];

// Вспомогательная функция #1 - поиск рандомного числа

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Вспомогательная функция #2 - поиск рандомного элемента массива

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Вспомогательная функция #3 - генерация ID

function createIdGenerator () {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2)}, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    {length:getRandomInteger(0, COMMENT_COUNT)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
