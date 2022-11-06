'use strict';

/* Cart icon & dropdown */
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown_wrapper');
const itemsInCartCount = document.querySelector('.items-in-cart-count');

/* Dropdown elements */
const quantityWrapper = document.querySelector('.product-choose-quantity');
const itemsInCart = document.querySelector('.item-in-cart');
const btnCheckout = document.querySelector('.btn-checkout');
const cartQuantity = document.getElementById('cart-quantity');
const cartPrice = document.getElementById('cart-price');
const removeItemsInCart = document.getElementById('trash-icon');
const emptyCartMsg = document.querySelector('.empty-cart-msg');

/* Add to cart elements */
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const selectItemQuantity = document.querySelector('.item-quantity');
const btnAddToCart = document.querySelector('.btn-adc');

/* Preview content variables*/
const bigProductImg = document.querySelector('.big-product-img');
const thumbnailWrapper = document.querySelector(
  '.light-box-thumbnail_container'
);
const thumbnailProductImgs = document.querySelectorAll('.product-img-thumb');

/* Lightbox(lb) variables */
const lbWrapper = document.querySelector('.light-box_wrapper-modal');
const overlay = document.querySelector('.overlay');
const lbBigProductImg = document.querySelector('.big-product-img-modal');
const lbThumbnailProductImgs = document.querySelectorAll(
  '.product-img-thumb-modal'
);
const closeLightbox = document.querySelector('.close-lightbox');

const maxItems = 50;
const itemPrice = 125;

let quantity = 0;

/* Reusable functions */
const ToggleCartDropdown = function () {
  cartDropdown.classList.toggle('hidden');
};
const OpenCartDropdown = function () {
  cartDropdown.classList.remove('hidden');
};
const CloseCartDropdown = function () {
  cartDropdown.classList.add('hidden');
};

const ShowCartContent = function () {
  itemsInCart.classList.remove('hidden');
  emptyCartMsg.classList.add('hidden');
  btnCheckout.classList.remove('hidden');
  itemsInCartCount.classList.remove('hidden');
};
const RemoveCartContent = function () {
  itemsInCart.classList.add('hidden');
  emptyCartMsg.classList.remove('hidden');
  btnCheckout.classList.add('hidden');
  itemsInCartCount.classList.add('hidden');
};
const CalculatePrice = function () {
  const price = quantity * itemPrice;
  return price;
};

const OpenLightbox = function () {
  lbWrapper.classList.remove('hidden');
  overlay.classList.remove('hidden');
  lbBigProductImg.src = bigProductImg.src;
};

const CloseLightbox = function () {
  lbWrapper.classList.add('hidden');
  overlay.classList.add('hidden');
  bigProductImg.src = lbBigProductImg.src;
};

const RemoveActiveClass = function (remove) {
  remove.forEach(img => {
    img.classList.remove('active-img-thumb');
  });
};

const ChangeThumbImg = function (thumbnails, replaceMainImg) {
  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      RemoveActiveClass(thumbnails);
      img.classList.toggle('active-img-thumb');
      replaceMainImg.src = img.src.replace(/-thumbnail/g, '');
    });
  });
};

window.addEventListener('load', RemoveCartContent);
cartIcon.addEventListener('click', ToggleCartDropdown);

/* Add to cart functionality */
quantityWrapper.addEventListener('click', e => {
  const clicked = e.target.closest('.quantity-select-btn');
  selectItemQuantity.textContent = quantity;
  if (clicked === btnPlus && quantity < maxItems) {
    selectItemQuantity.textContent = quantity += 1;
  }
  if (clicked === btnMinus && !quantity <= 0) {
    selectItemQuantity.textContent = quantity -= 1;
  }
  if (!clicked) return;
});

btnAddToCart.addEventListener('click', () => {
  cartDropdown.classList.remove('hidden');
  if (quantity > 0) {
    cartQuantity.textContent = quantity;
    cartPrice.textContent = `$${CalculatePrice()}.00`;
    ShowCartContent();
    itemsInCartCount.textContent = quantity;
  }
  if (quantity <= 0) RemoveCartContent();
});

removeItemsInCart.addEventListener('click', RemoveCartContent);

/* Preview content functionality */
ChangeThumbImg(thumbnailProductImgs, bigProductImg);

/* Lighbox functionality */
ChangeThumbImg(lbThumbnailProductImgs, lbBigProductImg);
bigProductImg.addEventListener('click', OpenLightbox);
closeLightbox.addEventListener('click', CloseLightbox);
overlay.addEventListener('click', CloseLightbox);

/* Slider */
const nextBtn = document.querySelector('.next-container');
const prevBtn = document.querySelector('.prev-container');

let curImg = 0;
const maxImg = lbThumbnailProductImgs.length;

const ShowActiveThumbnail = function () {
  for (let i = 0; i < lbThumbnailProductImgs.length; i++) {
    lbThumbnailProductImgs[i].classList.remove('active-img-thumb');
    lbThumbnailProductImgs[curImg].classList.add('active-img-thumb');
  }
};

const NextImg = function () {
  if (curImg === maxImg - 1) {
    curImg = 0;
  } else {
    curImg++;
  }
  lbBigProductImg.src = `images/image-product-${curImg + 1}.jpg`;
  ShowActiveThumbnail();
};

const PrevImg = function () {
  if (curImg === 0) {
    curImg = maxImg - 1;
  } else {
    curImg--;
  }
  lbBigProductImg.src = `images/image-product-${curImg + 1}.jpg`;
  ShowActiveThumbnail();
};

nextBtn.addEventListener('click', NextImg);
prevBtn.addEventListener('click', PrevImg);
