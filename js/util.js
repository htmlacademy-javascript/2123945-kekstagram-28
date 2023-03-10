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

export {getRandomInteger, getRandomArrayElement};
