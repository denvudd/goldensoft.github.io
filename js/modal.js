window.addEventListener('DOMContentLoaded', function () {
  // Modal
  function modal(selector) {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector(selector),
      modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
      modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';
      // clearInterval(modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }

    modalTrigger.forEach((btn) => {
      btn.addEventListener('click', openModal);
    });

    function closeModal() {
      modal.classList.toggle('show');
      document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
      }
    });

    // const modalTimerId = setTimeout(openModal, 5000);

    // function showModalByScroll() {
    //   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //     openModal();
    //     window.removeEventListener('scroll', showModalByScroll);
    //   }
    // }

    // window.addEventListener('scroll', showModalByScroll);
  }

  modal('.cart');
});