export function mobileMenu({ burgerButton, mobileMenu }) {
  const icons = {
    menuIcon: './img/burger_icon.svg',
    closeIcon: './img/burger_close.svg'
  }
  if (!burgerButton || !mobileMenu) return;
  burgerButton.addEventListener('click', () => {
    console.log('sdfdf');

    mobileMenu.classList.toggle('active-mobile-menu');
    const isMenuActive = mobileMenu.closest('.active-mobile-menu');
    console.log('isMenuActive', isMenuActive);
    burgerButton.style.backgroundImage = `url("${isMenuActive ? icons.closeIcon : icons.menuIcon}")`;
  })
}