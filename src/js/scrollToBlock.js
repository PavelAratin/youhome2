// Обработчик клика для плавной прокрутки
export function scrollToBlock({ buttonUp, footerNavLinks, buttonToForm, buttonToServices }) {
  // Универсальная функция для прокрутки к секции
  const scrollToSection = (element) => {
    if (!element) return;

    element.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionName = element.dataset.section;
      const section = document.querySelector(`.js-${sectionName}`);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  };

  // Обработка кнопки "Наверх"
  if (buttonUp) {
    buttonUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Обработка навигационных ссылок в футере
  if (footerNavLinks && footerNavLinks.length) {
    footerNavLinks.forEach(scrollToSection);
  }

  // Обработка остальных кнопок
  scrollToSection(buttonToForm);
  scrollToSection(buttonToServices);
}