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

const load = (route, errorText, message = Method.GET, body = null) =>
  fetch(`{BASE_URL}${route}`, { method, body})
    .then((response) => {
      if(!response.ok) {
        throw new Error();
      }
      return response.json();
    });
