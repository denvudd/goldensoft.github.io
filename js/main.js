document.addEventListener('DOMContentLoaded', () => {
  /* Mobile Menu */
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

  /* Counter */
  function counterTrigger(section) {
    let target = document.querySelector(section),
      targetPos = target.getBoundingClientRect().bottom,
      winHeight = window.innerHeight,
      scrollToElem = targetPos - winHeight,
      flag = true;

    document.addEventListener('scroll', () => {
      // if we scroll to element
      if (window.scrollY > scrollToElem && flag) {
        counter('[data-countItem]', 'data-number');
        flag = false;
      }
      // if we scroll to the element again, then everything will work again
      else if (window.scrollY < scrollToElem && !flag) {
        flag = true;
      }
    });
  }

  function counter(selector, number) {
    const countItem = document.querySelectorAll(selector);

    countItem.forEach((e) => {
      let currentNumber = 0,
        finalNumber = parseFloat(e.getAttribute(number)),
        delay;

      switch (true) {
        case (finalNumber < 10):
          delay = 200;
          break;
        case (finalNumber < 50):
          delay = 100;
          break;
        case (finalNumber < 100):
          delay = 10;
          break;
        case (finalNumber < 400):
          delat = 10;
          break;
        case (finalNumber < 500):
          delay = 100;
          break;
        default:
          delay = 50;
          break;
      }

      const increment = setInterval(() => {
        e.innerHTML = currentNumber;
        if (currentNumber < finalNumber) {
          if (finalNumber > 1000) {
            currentNumber += 100;
          } else {
            currentNumber++;
          }
        } else {
          clearInterval(increment);
        }
      }, delay);
    });
  }

  counterTrigger('.numbers');
  mobileMenu('.burger-menu');
});