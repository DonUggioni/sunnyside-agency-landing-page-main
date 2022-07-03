'use strict';

const mobileMenu = document.querySelector('.mobile__menu');
const navLinks = document.querySelector('.nav__links');
const navBar = document.querySelector('.nav');

mobileMenu.addEventListener('click', function (e) {
  e.preventDefault();

  navLinks.classList.toggle('nav__links--hidden');
  mobileMenu.classList.toggle('mobile__menu--open');
});

navBar.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');

  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
