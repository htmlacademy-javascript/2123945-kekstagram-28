const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз',
};

// Функция, которая загружает данные с сервера
const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      //debugger;
      if(!response.ok) {
        throw new Error();
      }
      //let data;
      return response.json().then((res) => ({ res }));
      //return data;
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = async() =>
  await load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
