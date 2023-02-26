// Функция #1: проверка длины строки
// Cтрока короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false

const isLessOrEqual = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

// Функция #2: проверка, является ли строка палиндромом
// Строка является палиндромом
// имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// Это не палиндром
// имяФункции('Кекс');  // false

const isPalindrom = (string) => {
  const tempString = string.toLowerCase();

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  console.log(reverseString);
  return tempString === reverseString;
};

// имяФункции('Лёша на полке клопа нашёл '); // true

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
    for (let i = tempString.length - 1; i >= 0; i--) {
      reverseString += tempString.at(i);
    }
  console.log(reverseString);
  return tempString === reverseString;
  };
