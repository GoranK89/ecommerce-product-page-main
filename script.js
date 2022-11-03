'use strict';

/* Cart functionality */
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown_wrapper');

cartIcon.addEventListener('click', () => {
  cartDropdown.classList.toggle('hidden');
});

/* Lightbox functionality */
const bigProductImg = document.querySelector('.big-product-img');
const thumbnailWrapper = document.querySelector(
  '.light-box-thumbnail_container'
);
const thumbnailProductImgs = document.querySelectorAll('.product-img-thumb');

thumbnailProductImgs.forEach(img => {
  img.addEventListener('click', () => {
    thumbnailProductImgs.forEach(img => {
      img.classList.remove('active-img-thumb');
    });
    img.classList.toggle('active-img-thumb');
    bigProductImg.src = img.src.replace(/-thumbnail/g, '');
  });
});

const quanityContainer = document.querySelector('.product-choose-quantity');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const selectAmmount = document.querySelector('.item-quantity');

let quantity = 1;

quanityContainer.addEventListener('click', e => {
  const target = e.target;
});
