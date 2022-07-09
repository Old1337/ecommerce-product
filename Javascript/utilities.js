"use strict";

export const addClassOnClick = (clickedEl, targetEl, className) => {
  clickedEl.addEventListener("click", () => {
    targetEl.classList.add(className);
  });
};

export const removeClassOnClick = (clickedEl, targetEl, className) => {
  clickedEl.addEventListener("click", () => {
    targetEl.classList.remove(className);
  });
};

export const toggleClassOnClick = (clickedEl, targetEl, className) => {
  clickedEl.addEventListener("click", () => {
    targetEl.classList.toggle(className);
  });
};

export const removeClassFromAllEl = (elements, className) => {
  elements.forEach((el) => el.classList.remove(className));
};
