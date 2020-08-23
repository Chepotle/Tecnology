let burger = document.querySelector('.burger');
let menuWraper = document.querySelector('.burger_menu_wraper');
let burgerMenu = document.querySelector('.burger_menu');

burger.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger_menu_open');
    menuWraper.classList.toggle('burger_wraper_position');
});