const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('thesis-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const nombre = data.get('nombre') || '';
  const carrera = data.get('carrera') || '';
  const etapa = data.get('etapa') || '';
  const mensaje = data.get('mensaje') || 'Sin mensaje adicional';

  const text = [
    'Hola, quisiera solicitar orientación para mi proyecto de tesis.',
    '',
    `Nombre: ${nombre}`,
    `Carrera o programa: ${carrera}`,
    `Etapa del proyecto: ${etapa}`,
    `Mensaje: ${mensaje}`
  ].join('\n');

  const url = `https://wa.me/56973867356?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
});
