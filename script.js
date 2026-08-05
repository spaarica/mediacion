
const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
