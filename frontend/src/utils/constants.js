//Типы селекторов для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

//Данные для api связи с сервером
export const connectionConfig = {
  server: 'http://51.250.27.222:3000',
  profileDataPath : 'users/me',
  cardsDataPath : 'cards',
  token : '6190affa-5b62-40b0-ae29-11fd0f040107',
  group : 'cohort-63'
};

export const authConfig = {
  server: 'http://51.250.27.222:3000',
  registerPath : 'signup',
  loginPath : 'signin',
  authCheckPath : 'users/me',
};

