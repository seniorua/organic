// include("swiper-bundle.js");
// Show-hide area
// function showblock(el1, el2){
//   let a = document.querySelector(el1);
//   let b = document.querySelector(el2);
//   a.addEventListener("click", function(){
//     if(b.classList.contains("show")){
//       b.classList.remove("show");
//       a.innerHTML = "Показать!";
//     }
//     else{
//       b.classList.add("show");
//       a.innerHTML = "Скрыть!";
//     }
//   });
// }
// showblock(".btn1", ".p1");
// showblock(".btn2", ".p2");




// function rightMenuShow(){
//   let hb = document.querySelector(".header__btn");
//   let rsm = document.querySelector(".rightside-menu");
//   let rsmc = document.querySelector(".rightside-menu__close");
//   hb.addEventListener("click", function(){
//     console.log('Показываем...');
//     rsm.classList.remove("rightside-menu--close");
//     hb.classList.add("header__btn--disable");
//     // document.getElementsByClassName("header__btn").style.opacity = "0.2";
//   });
//   rsmc.addEventListener("click", function(){
//     console.log('Спрятали');
//     rsm.classList.add("rightside-menu--close");
//     hb.classList.remove("header__btn--disable");
//     // hb.style.opasity = "1";
//   });
// }
// $(function(){
//   $('.top__slider').slick({
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     // fade: true
//   });
  // var mixer = mixitup('.gallery__inner');
  // mixitup('.gallery__inner');
// })

// function mymixitup(){
//   var mi = document.querySelector('.gallery__inner');
//   var mix = mixitup(mi);
//   mix.filter('.living');
// }
// mymixitup();

// MixItUp

// $('.top__slider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 2
// });


// $('.top__slider').slick({
//   centerMode: true,
//   centerPadding: '100px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// rightMenuShow();
//
// ********************************************
// const swiper = new Swiper('.swiper', {
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   pagination: {
//     el: '.swiper-pagination',
//   },

// });
// *************************************

const swiper = new Swiper('.article__left', {
  wrapperClass: 'article__slider',
  slideClass: 'article__blockquote',
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: '.narrow__right',
    prevEl: '.narrow__left',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
});

// Creating MixItUp----------------
var mixer = mixitup('.mixgalary__items');

// Videodron-----------------------
window.addEventListener('DOMContentLoaded', function(){
  var videodron = document.querySelector('.video__inner');
  
  videodron.addEventListener('click', function(){
    console.log('нажата кнопка проигрывания...');
    if(videodron.classList.contains('activited')){
      console.log('класс activited уже есть...');
      return;
    } else {
      videodron.classList.add('activited');
      console.log('добавлен класс activited!!!');
      var src = videodron.dataset.src;
      videodron.insertAdjacentHTML(
        'afterbegin', '<iframe src="'+ src +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    }
  });
})
//---------------------------------- 

// menu
// let menu = document.querySelector('.menu__list');
// menu.addEventListener('click', function(e){
//   if(e.target.nodeName == 'SPAN'){
//     console.log('клик по раскрывающемся меню...');
//     console.log(e);
//     e.target.nextElementSibling.classList.add('menu__show');
//   }
//   else return;

  // e.target.nextElementSibling.classList.toggle('menu__show');
  // closeAllSubMenu();
  // if(e.target.nextElementSibling.classList.contains('menu__show')){
  //   e.target.nextElementSibling.classList.remove('menu__show');
    // closeAllSubMenu();
  // }
  // else{
    // closeAllSubMenu();
  //   e.target.nextElementSibling.classList.add('menu__show');
  // }
// });

// function closeAllSubMenu(current = null){
//   let subMenu = document.querySelectorAll('.menu__list ul');
//   for(let i = 0; i<subMenu.length; i++){
//     if (subMenu[i].classList.contains("menu__show") && subMenu[i].classList != current){
//       console.log('очистили '+i+1+' меню...');
//       subMenu[i].classList.remove("menu__show");
//     }
//   }
// }
// let span = document.querySelectorAll('SPAN');
// let list1 = document.querySelectorAll('.menu__list-1');
// for(let i = 0; i<span.length; i++){
//   span[i].addEventListener("click", function(){
//     console.log('клик по выпадающему меню...');
//     });
// }

// span.addEventListener("click", function(){
//   console.log('Клик по меню...');
  // if(span.nodeName == 'SPAN'){
  //   span.nextElementSibling.classList.add('menu__show');
  // }
  // else {
  //   span.nextElementSibling.classList.remove('menu__show');
  // }

  // return;
  // if (list1.classList.contains("menu__show")){
  //   console.log('Удаляем меню');
  //   // console.log(event);
  //   list1.classList.remove('menu__show');
  // }
  // else{
  //   console.log('Показуем меню');
  //   list1.classList.add('menu__show');
  // }

  // event.target.nextElementSibling.classList.add('menu__show');
    
  // }
  // console.dir(list1);
// });
let aaa = document.querySelectorAll('.aaa');
for( let i = 0; i < aaa.length; i++) {
  aaa[i].style.color = "white";
  aaa[i].addEventListener("click", function(){
    console.log('Клик по ааа');

  });
}