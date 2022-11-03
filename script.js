'use strict';

/* Cart functionality */
const cartIcon = document.getElementById('cart-icon');

cartIcon.addEventListener('click', () => {
  cartIcon.insertAdjacentHTML(
    'afterend',
    `
    <div id="cart-dropdown_wrapper">
     <p>Cart</p>
     <p>Your cart is empty</p>
    </div>
    `
  );
});

/* Add active border on thumbnail images */
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
