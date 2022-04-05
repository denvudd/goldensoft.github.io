document.addEventListener('DOMContentLoaded', () => {
  function mobileMenu(selector) {
    const menu = document.querySelector(selector),
      button = menu.querySelector('.burger-menu__button'),
      links = menu.querySelector('.burger__link');

    button.addEventListener('click', (event) => {
      event.preventDefault();
      toggleMenu();
    });

    links.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
      menu.classList.toggle('burger-menu__active');

      if (menu.classList.contains('burger-menu__active')) {
        document.querySelector('html').style.overflowY = "hidden";
      } else {
        document.querySelector('html').style.overflowY = "visible";
      }
    }
  }

  mobileMenu('.burger-menu');
});