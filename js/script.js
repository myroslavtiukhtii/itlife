document.addEventListener('DOMContentLoaded', function () {
  const HEADER = document.querySelector('.header');
  const MENU_BUTTON = HEADER.querySelector('.menu-button');

  MENU_BUTTON.addEventListener('click', function () {
    HEADER.classList.toggle('header--menu-active');
    document.body.classList.toggle('no-scroll');
  });
});

