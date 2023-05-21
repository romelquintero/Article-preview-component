"use strict";

const btn = document.querySelector(".share");
const media = document.querySelector(".media");

btn.addEventListener("click", function () {
  media.classList.toggle("hidden");
});
