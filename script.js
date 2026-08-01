const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('whatsapp-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const nombre = data.get('nombre') || '';
  const ciudad = data.get('ciudad') || 'No indicada';
  const modalidad = data.get('modalidad') || 'No indicada';
  const materia = data.get('materia') || 'No indicada';
  const mensaje = data.get('mensaje') || 'Sin mensaje adicional';

  const texto = [
    'Hola Genoveva, quisiera solicitar orientación.',
    '',
    `Nombre: ${nombre}`,
    `Ciudad o comuna: ${ciudad}`,
    `Modalidad preferida: ${modalidad}`,
    `Materia general: ${materia}`,
    `Mensaje: ${mensaje}`
  ].join('\n');

  const url = `https://wa.me/56973867356?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener');
});
