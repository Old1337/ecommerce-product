"use strict";

import {
  addClassOnClick,
  removeClassOnClick,
  toggleClassOnClick,
  removeClassFromAllEl,
} from "./utilities.js";

const openNavBtn = document.querySelector(".header_menu");
const closeNavBtn = document.querySelector(".nav-mobile_close");
const mobileNav = document.querySelector(".nav-mobile");

const cartBtn = document.querySelector(".header_cart");
const cartBox = document.querySelector(".cart-box");

const sliderNextBtn = document.querySelector(".slider_next");
const sliderPreviousBtn = document.querySelector(".slider_previous");

const sliderImages = document.querySelectorAll(".slider_image");
const sliderThumbNails = document.querySelectorAll(".slider_thumbnail");
const sliderImage = document.querySelector(".slider_image");

const reduceBtn = document.querySelector(".product_reduce");
const increaseBtn = document.querySelector(".product_increase");
const productQuantitiy = document.querySelector(".product_quantitiy");

const addToCartBtn = document.querySelector(".product_add-to-cart");
const cartContainer = document.querySelector(".cart-box_item");

const noItemSpn = document.querySelector(".no-item");
const itemsTotalSpn = document.querySelector(".header_cart-total");
const itemsNumber = document.querySelector(".cart-box_number");
const itemsTotal = document.querySelector(".cart-box_total");

const deleteBtn = document.querySelector(".cart-box_delete");
const checkoutBtn = document.querySelector(".cart-box_checkout");

toggleClassOnClick(cartBtn, cartBtn, "active");
toggleClassOnClick(cartBtn, cartBox, "active");

addClassOnClick(openNavBtn, mobileNav, "active");
removeClassOnClick(closeNavBtn, mobileNav, "active");

let currentIndex = 0;

sliderNextBtn.addEventListener("click", () => {
  const currentImageWidth = sliderImages[currentIndex].clientWidth;

  currentIndex++;

  if (currentIndex > 0) {
    sliderPreviousBtn.classList.remove("active");
  } else {
    sliderPreviousBtn.classList.add("active");
  }

  isCurrIndexEqualImageLen();

  sliderImages[currentIndex].style.transform = `translateX(${
    currentIndex * -currentImageWidth
  }px)`;
});

sliderPreviousBtn.addEventListener("click", () => {
  const currentImageWidth = sliderImages[currentIndex].clientWidth;

  sliderImages[currentIndex].style.transform = `translateX(${
    currentIndex * currentImageWidth
  }px)`;

  currentIndex--;

  isCurrIndexEqualImageLen();

  if (currentIndex === 0) {
    sliderPreviousBtn.classList.add("active");
  } else {
    sliderPreviousBtn.classList.remove("active");
  }
});

function isCurrIndexEqualImageLen() {
  if (currentIndex === sliderImages.length - 1) {
    sliderNextBtn.classList.add("active");
  } else {
    sliderNextBtn.classList.remove("active");
  }
}

sliderThumbNails.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    removeClassFromAllEl(sliderThumbNails, "active");

    sliderImage.src = `images/image-product-${e.target.dataset.index}.jpg`;

    e.target.classList.add("active");
  });
});

increaseBtn.addEventListener("click", () => {
  productQuantitiy.textContent++;
});

reduceBtn.addEventListener("click", () => {
  if (productQuantitiy.textContent == 0) {
    productQuantitiy.textContent = 0;
  } else {
    productQuantitiy.textContent--;
  }
});

addToCartBtn.addEventListener("click", () => {
  if (productQuantitiy.textContent != 0) {
    noItemSpn.classList.add("active");
    cartContainer.classList.add("active");
    checkoutBtn.classList.add("active");

    itemsNumber.textContent = productQuantitiy.textContent;
    itemsTotalSpn.textContent = productQuantitiy.textContent;
    itemsTotal.textContent = `${productQuantitiy.textContent * 125}.00`;

    cartBtn.click();
    // to improve user experience in mobile

    scrollTo(0, 0);
  }
});

deleteBtn.addEventListener("click", () => {
  cartContainer.classList.remove("active");
  noItemSpn.classList.remove("active");
  checkoutBtn.classList.remove("active");

  itemsTotalSpn.textContent = 0;
});
