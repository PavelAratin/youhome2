import { swiper } from "./swiper";
import { accordeon } from "./accordeon";
import { formInit } from './form'; //инициализация формы
import { scrollToBlock } from "./scrollToBlock";
import { mobileMenu } from "./mobileMenu";
//swiper
const swiperExamplesWorkEl = document.querySelector('.js-swiper-examples-work');
const swiperHeroEl = document.querySelector('.js-swiper-hero');
//accordeon
const accordeonItemElems = document.querySelectorAll('.js-accordeon-item');
//form
const formEl = document.querySelector('.js-form');
const formButtonEl = document.querySelector('.js-form-button');
const nameInputEl = formEl.querySelector('.js-input-name');
const phoneInputEl = formEl.querySelector('.js-input-tel');
const emailInputEl = formEl.querySelector('.js-input-email');
const messageInputEl = formEl.querySelector('.js-input-message');
const checkboxEl = formEl.querySelector('.js-chek');

//smooth scroll
const buttonUpEl = document.querySelector('.js-up');
const buttonToFormEl = document.querySelector('.js-button-tofeedback');
const buttonToServicesEl = document.querySelector('.js-button-toservices');
const footerNavLinkElems = document.querySelectorAll('.js-footer-nav-link');

//mobile menu
const burgerButtonEl = document.querySelector('.js-burger');
const mobileMenuEl = document.querySelector('.js-mobile-menu');

swiper(swiperExamplesWorkEl, swiperHeroEl);
accordeon(accordeonItemElems);
//отправка и валидация формы
formInit({
  form: formEl,
  buttonForm: formButtonEl,
  fields: {
    name: nameInputEl,
    phone: phoneInputEl,
    email: emailInputEl,
    message: messageInputEl,
  },
  checkbox: checkboxEl,
});

//плавный скоролл до блоков
scrollToBlock({
  buttonUp: buttonUpEl,
  footerNavLinks: footerNavLinkElems,
  buttonToForm: buttonToFormEl,
  buttonToServices: buttonToServicesEl,
})

//мобильное меню
mobileMenu({ burgerButton: burgerButtonEl, mobileMenu: mobileMenuEl });
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log('isMobile', isMobile);
console.log('navigator.userAgent', navigator.userAgent);
