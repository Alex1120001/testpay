// menu mobile
let burger_icon = document.querySelector('.burger-icon');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

burger_icon.onclick = function(){
    menu.style.width = '200px';
}
close.onclick = function(){
    menu.style.width = '0px';
}