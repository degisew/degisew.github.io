const navbar = document.querySelector('nav');
const menuButton = navbar.querySelector('button');
const menuLinks = document.getElementById('menu-links');
const contactAnchor = menuLinks.querySelector('#anchor-about');
const aboutAnchor = menuLinks.querySelector('#anchor-contact');
const backdrop = document.getElementById('backdrop');
const closeBtn = backdrop.querySelector('.btn-close');
menuButton.addEventListener('click', () => {
  backdrop.classList.toggle('visible');
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  backdrop.classList.toggle('visible');
  document.body.style.overflow = 'visible';
});

aboutAnchor.addEventListener('click', () => {
  backdrop.classList.toggle('visible');
  document.body.style.overflow = 'visible';
});
contactAnchor.addEventListener('click', () => {
  backdrop.classList.toggle('visible');
  document.body.style.overflow = 'visible';
});
