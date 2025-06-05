/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordeon.js":
/*!*****************************!*\
  !*** ./src/js/accordeon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordeon": () => (/* binding */ accordeon)
/* harmony export */ });
function accordeon(accordeonElems) {
  if (!accordeonElems.length) return; //если аккордеона нет,выходим

  accordeonElems.forEach(function (accordeon) {
    accordeon.addEventListener('click', function () {
      accordeon.classList.toggle('js-active-accordeon');
    });
  });
}

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formInit": () => (/* binding */ formInit)
/* harmony export */ });
var formPayload = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};
var services = {
  ID_SERVICE: 'service_twzj527',
  ID_TEMPLATES: 'template_byvk3eq'
};
var erorrMessageText = {
  ERROR_MESSAGE: 'Это поле обязательно для заполнения'
};
var buttonText = {
  SUCCESS: 'Заявка оформлена',
  DEFAULT: 'Оформить заявку'
};
var regexs = {
  // Валидация телефона 
  PHONE_REGEX: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
  // Валидация email
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};
function formInit(_ref) {
  var form = _ref.form,
      fields = _ref.fields,
      checkbox = _ref.checkbox,
      buttonForm = _ref.buttonForm;

  function validateName(name) {
    return name.value.trim() !== '';
  }

  function validatePhone(phone) {
    return regexs.PHONE_REGEX.test(phone.value);
  }

  function validateCheckbox(checkbox) {
    return checkbox.checked ? true : false;
  }

  function markInvalid(input, isValid, errorMessageText) {
    if (!isValid) {
      if (input.name === 'name') {
        input.placeholder = errorMessageText;
        input.classList.add('js-red-placeholder');
        var labelEl = input.closest('.js-label');
        labelEl.style.color = '#c92626';
      }

      if (input.name === 'tel') {
        input.placeholder = errorMessageText;
        input.classList.add('js-red-placeholder');

        var _labelEl = input.closest('.js-label');

        _labelEl.style.color = '#c92626';
      }

      if (input.type === 'checkbox') {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }

    ;
  }

  ;

  function validateForm(fields) {
    return {
      nameValid: validateName(fields.name),
      phoneValid: validatePhone(fields.phone),
      checkboxValid: validateCheckbox(checkbox),
      allValid: function allValid() {
        return this.nameValid && this.phoneValid && this.checkboxValid;
      }
    };
  }

  function resetErrors() {
    // Сбрасываем стили для всех полей
    var errorFields = form.querySelectorAll('.js-red-placeholder, .error');
    errorFields.forEach(function (field) {
      field.classList.remove('js-red-placeholder', 'error');
      field.placeholder = ''; // Сбрасываем placeholder
      // Если у поля есть соответствующий label

      var label = field.closest('.js-label');

      if (label) {
        label.style.color = ''; // Сбрасываем цвет текста label
      }
    });
  }

  emailjs.init({
    publicKey: "PW8JbRD7lMEM_f1pZ"
  }); // отправка формы

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Сбрасываем все ошибки перед проверкой

    resetErrors(); // валидация формы

    var validation = validateForm(fields); // Отметить невалидные поля

    markInvalid(fields.name, validation.nameValid, erorrMessageText.ERROR_MESSAGE);
    markInvalid(fields.phone, validation.phoneValid, erorrMessageText.ERROR_MESSAGE);
    markInvalid(checkbox, validation.checkboxValid); // форма не отправиться, если есть невалидные поля

    if (!validation.allValid()) {
      console.log('Форма содержит ошибки');
      return;
    } // сервис emailjs id-сервис gmail,id-шаблон сообщения


    emailjs.sendForm(services.ID_SERVICE, services.ID_TEMPLATES, form).then(function () {
      console.log(formPayload.SUCCESS);
      form.reset();
      resetErrors();
      buttonForm.textContent = buttonText.SUCCESS;
      setTimeout(function () {
        buttonForm.textContent = buttonText.DEFAULT;
      }, 2000);
    }, function (error) {
      console.log(formPayload.FAILED, error);
    });
  });
}

/***/ }),

/***/ "./src/js/mobileMenu.js":
/*!******************************!*\
  !*** ./src/js/mobileMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenu": () => (/* binding */ mobileMenu)
/* harmony export */ });
function mobileMenu(_ref) {
  var burgerButton = _ref.burgerButton,
      mobileMenu = _ref.mobileMenu;
  var icons = {
    menuIcon: './img/burger_icon.png',
    closeIcon: './img/close_burger.png'
  };
  if (!burgerButton || !mobileMenu) return;
  burgerButton.addEventListener('click', function () {
    console.log('sdfdf');
    mobileMenu.classList.toggle('active-mobile-menu');
    var isMenuActive = mobileMenu.closest('.active-mobile-menu');
    console.log('isMenuActive', isMenuActive);
    burgerButton.style.backgroundImage = "url(\"".concat(isMenuActive ? icons.closeIcon : icons.menuIcon, "\")");
  });
}

/***/ }),

/***/ "./src/js/scrollToBlock.js":
/*!*********************************!*\
  !*** ./src/js/scrollToBlock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollToBlock": () => (/* binding */ scrollToBlock)
/* harmony export */ });
// Обработчик клика для плавной прокрутки
function scrollToBlock(_ref) {
  var buttonUp = _ref.buttonUp,
      footerNavLinks = _ref.footerNavLinks,
      buttonToForm = _ref.buttonToForm,
      buttonToServices = _ref.buttonToServices;

  // Универсальная функция для прокрутки к секции
  var scrollToSection = function scrollToSection(element) {
    if (!element) return;
    element.addEventListener('click', function (e) {
      e.preventDefault();
      var sectionName = element.dataset.section;
      var section = document.querySelector(".js-".concat(sectionName));

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }; // Обработка кнопки "Наверх"


  if (buttonUp) {
    buttonUp.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } // Обработка навигационных ссылок в футере


  if (footerNavLinks && footerNavLinks.length) {
    footerNavLinks.forEach(scrollToSection);
  } // Обработка остальных кнопок


  scrollToSection(buttonToForm);
  scrollToSection(buttonToServices);
}

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiper": () => (/* binding */ swiper)
/* harmony export */ });
function swiper(swiperEl, swiperHeroEl) {
  if (swiperEl) {
    new Swiper(swiperEl, {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.js-swiper-button-next',
        // Указываем свои классы
        prevEl: '.js-swiper-button-prev'
      },
      breakpoints: {
        // when window width is >= 576px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }

  if (swiperHeroEl) {
    new Swiper(swiperHeroEl, {
      direction: 'horizontal',
      // loop: true,
      // Автопрокрутка
      autoplay: {
        delay: 2000 // Интервал между слайдами в миллисекундах (3 сек)

      },
      // Скорость анимации
      speed: 1000,
      // Длительность перехода в миллисекундах (0.8 сек)
      // Эффект перехода (опционально)
      effect: 'fade' // Также можно 'slide', 'cube', 'coverflow'

    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ "./src/js/swiper.js");
/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordeon */ "./src/js/accordeon.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _scrollToBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollToBlock */ "./src/js/scrollToBlock.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobileMenu */ "./src/js/mobileMenu.js");


 //инициализация формы


 //swiper

var swiperExamplesWorkEl = document.querySelector('.js-swiper-examples-work');
var swiperHeroEl = document.querySelector('.js-swiper-hero'); //accordeon

var accordeonItemElems = document.querySelectorAll('.js-accordeon-item'); //form

var formEl = document.querySelector('.js-form');
var formButtonEl = document.querySelector('.js-form-button');
var nameInputEl = formEl.querySelector('.js-input-name');
var phoneInputEl = formEl.querySelector('.js-input-tel');
var emailInputEl = formEl.querySelector('.js-input-email');
var messageInputEl = formEl.querySelector('.js-input-message');
var checkboxEl = formEl.querySelector('.js-chek'); //smooth scroll

var buttonUpEl = document.querySelector('.js-up');
var buttonToFormEl = document.querySelector('.js-button-tofeedback');
var buttonToServicesEl = document.querySelector('.js-button-toservices');
var footerNavLinkElems = document.querySelectorAll('.js-footer-nav-link'); //mobile menu

var burgerButtonEl = document.querySelector('.js-burger');
var mobileMenuEl = document.querySelector('.js-mobile-menu');
(0,_swiper__WEBPACK_IMPORTED_MODULE_0__.swiper)(swiperExamplesWorkEl, swiperHeroEl);
(0,_accordeon__WEBPACK_IMPORTED_MODULE_1__.accordeon)(accordeonItemElems); //отправка и валидация формы

(0,_form__WEBPACK_IMPORTED_MODULE_2__.formInit)({
  form: formEl,
  buttonForm: formButtonEl,
  fields: {
    name: nameInputEl,
    phone: phoneInputEl,
    email: emailInputEl,
    message: messageInputEl
  },
  checkbox: checkboxEl
}); //плавный скоролл до блоков

(0,_scrollToBlock__WEBPACK_IMPORTED_MODULE_3__.scrollToBlock)({
  buttonUp: buttonUpEl,
  footerNavLinks: footerNavLinkElems,
  buttonToForm: buttonToFormEl,
  buttonToServices: buttonToServicesEl
}); //мобильное меню

(0,_mobileMenu__WEBPACK_IMPORTED_MODULE_4__.mobileMenu)({
  burgerButton: burgerButtonEl,
  mobileMenu: mobileMenuEl
}); // Фикс для iOS Safari (поддержка 100vh)

function setRealVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
} // Инициализация и обработка ресайза


setRealVh();
window.addEventListener('resize', setRealVh);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
