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
      // loop: true,
      // Автопрокрутка
      autoplay: {
        delay: 2000, // Интервал между слайдами в миллисекундах (3 сек)
      },
      // Скорость анимации
      speed: 1000, // Длительность перехода в миллисекундах (0.8 сек)
      // Эффект перехода (опционально)
      effect: 'fade', // Также можно 'slide', 'cube', 'coverflow'
    });
  }
}