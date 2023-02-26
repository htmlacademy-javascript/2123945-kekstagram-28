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

//// имяФункции('Лёша на полке клопа нашёл '); // true

//const isPalindrom = (string) => {
//  const tempString = string
//    .toLowerCase()
//    .replaceAll(' ', '');

//  let reverseString = '';
//    for (let i = tempString.length - 1; i >= 0; i--) {
//      reverseString += tempString.at(i);
//    }
//  console.log(reverseString);
//  return tempString === reverseString;
//  };

// Функция #3: принимает строку, извлекает цифры от 0 до 9 и возвращает их в виде целого положительного числа
// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    // шаг 1. преобразовываем символы к числу шаг2.проверяем, если это не NaN - записываем в 'result'
    if (!Number.isNaN(parseInt(string.at(i),10))) {
    result += string.at(i);
  }
}
return parseInt(result, 10);
}

// Функция #4: принимает 3 параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

// Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'
