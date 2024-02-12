let feedback = document.querySelector('.feedback');
let form = feedback.querySelector('.feedback-form');

let fullname = feedback.querySelector('.feedback-form-fullname');
let phone = feedback.querySelector('.feedback-form-phone');

let storageFullname = localStorage.getItem('fullname');
let storagePhone = localStorage.getItem('phone');

let popupError = document.querySelector('.error');
let closeError = popupError.querySelector('.popup-close');

let popupErrorFullname = document.querySelector('.error-fullname');
let closeFullname = popupErrorFullname.querySelector('.popup-close');

let popupErrorPhone = document.querySelector('.error-phone');
let closePhone = popupErrorPhone.querySelector('.popup-close');

let popupAccepted = document.querySelector('.accepted');
let closeAccepted = popupAccepted.querySelector('.popup-close');

let overlay = document.querySelector('.popup-overlay');



if(storageFullname){
  fullname.value = storageFullname;
}

if(storagePhone){
  phone.value = storagePhone;
}

form.addEventListener('submit', function(evt){
  evt.preventDefault();

  if(!fullname.value && !phone.value){
    // console.log('Вы ничего не ввели! Заполните, пожалуйста, форму для формирования заявки.');
    popupError.classList.add('popup-show');
    overlay.classList.add('popup-overlay-show');
    fullname.focus();
  } else if(!fullname.value){
    // console.log('Пожалуйста, введите Ваше имя по образцу.');
    popupErrorFullname.classList.add('popup-show');
    overlay.classList.add('popup-overlay-show');
    fullname.focus();
  } else if(!phone.value){
    // console.log('Пожалуйста, введите Ваш телефон по образцу.');
    popupErrorPhone.classList.add('popup-show');
    overlay.classList.add('popup-overlay-show');
    phone.focus();
  } else {
    // console.log('Ваша заявка отправлена! Наш менеджер свяжется с Вами в ближайшее время.');
    popupAccepted.classList.add('popup-show');
    overlay.classList.add('popup-overlay-show');

    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('phone', phone.value);
  }
});

closeError.addEventListener('click', function (evt){
  evt.preventDefault();
  popupError.classList.remove('popup-show');
  overlay.classList.remove('popup-overlay-show');
  fullname.focus();
});

closeFullname.addEventListener('click', function (evt){
  evt.preventDefault();
  popupErrorFullname.classList.remove('popup-show');
  overlay.classList.remove('popup-overlay-show');
  fullname.focus();
});

closePhone.addEventListener('click', function (evt){
  evt.preventDefault();
  popupErrorPhone.classList.remove('popup-show');
  overlay.classList.remove('popup-overlay-show');
  phone.focus();
});

closeAccepted.addEventListener('click', function (evt){
  evt.preventDefault();
  popupAccepted.classList.remove('popup-show');
  overlay.classList.remove('popup-overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(popupAccepted.classList.contains('popup-show')){
      popupAccepted.classList.remove('popup-show');
    }
    if(popupError.classList.contains('popup-show')){
      popupError.classList.remove('popup-show');
    }
    if(popupErrorFullname.classList.contains('popup-show')){
      popupErrorFullname.classList.remove('popup-show');
    }
    if(popupErrorPhone.classList.contains('popup-show')){
      popupErrorPhone.classList.remove('popup-show');
    }
    if(overlay.classList.contains('popup-overlay-show')){
      overlay.classList.remove('popup-overlay-show');
    }
  }
});