let pageFooter = document.querySelector('.page-footer');
let scrollUpLink = pageFooter.querySelector('.page-footer__scroll-up-link');
let pageHeader = document.querySelector('.page-header');


window.onscroll = function(){
  if(window.pageYOffset > 100){
    pageHeader.classList.add('page-header-sticky');
  } else {
    pageHeader.classList.remove('page-header-sticky');
  }

  if(window.pageYOffset > 200){
    scrollUpLink.classList.add('page-footer__scroll-up-link-show');
  } else {
    scrollUpLink.classList.remove('page-footer__scroll-up-link-show');
  }
};

scrollUpLink.onclick = function(){
  window.scrollTo(0, 0);
}