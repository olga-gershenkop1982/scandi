let reviews = document.querySelector('.reviews');
let controlBack = reviews.querySelector('.control-back');
let controlNext = reviews.querySelector('.control-next');

let sliderList = reviews.querySelector('.slider-list');
let slides = sliderList.querySelectorAll('.slide');

let i = 0; //номер текущего слайда, на экране


controlBack.addEventListener('click', function(){
  slides[i].style.display = 'none';  //прячем текущий слайд

  i--; //уменьшаем переменную i на 1

  if(i < 0){
    i = slides.length - 1;
  }

  slides[i].style.display = 'block';  //показываем текущий слайд
});

controlNext.addEventListener('click', function(){
  slides[i].style.display = 'none';  //прячем текущий слайд

  i++; // увеличиваем переменную i на 1

  if(i >= slides.length){
    i = 0; //переменная i равна 0
  }

  slides[i].style.display = 'block';  //показываем текущий слайд
});