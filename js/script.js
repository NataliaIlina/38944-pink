var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-header__toggle");
var navTop = document.querySelector(".logo");

mainNav.classList.add("main-nav--closed");

navToggle.addEventListener('click', function(){
  if(mainNav.classList.contains("main-nav--closed")){
    mainNav.classList.remove("main-nav--closed");
    navToggle.classList.add('main-header__toggle--cross');
    navTop.classList.add('logo--active');
  }
  else{
    mainNav.classList.add("main-nav--closed");
    navToggle.classList.remove('main-header__toggle--cross');
    navTop.classList.remove('logo--active');
  }
});
