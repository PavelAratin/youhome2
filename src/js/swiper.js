export function swiper(swiperEl, swiperHeroEl) {
  if (swiperEl) {
    new Swiper(swiperEl, {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.js-swiper-button-next', // Указываем свои классы
        prevEl: '.js-swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 576px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
      }
    });
  }
  if (swiperHeroEl) {
    new Swiper(swiperHeroEl, {
      direction: 'horizontal',
      autoplay: {
        delay: 2000,
        disableOnInteraction: false, // продолжать автопрокрутку после ручного вмешательства
      },
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true // добавляет плавное перекрытие слайдов
      },
      on: {
        init: function () {
          // Инициализация opacity для первого слайда
          const slides = this.slides;
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
          }
          slides[this.activeIndex].style.opacity = 1;
        },
        slideChangeTransitionStart: function () {
          // Управление opacity во время перехода
          const slides = this.slides;
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
            slides[i].style.transition = 'opacity 0.5s';
          }
          slides[this.activeIndex].style.opacity = 1;
        }
      }
    });
  }
}