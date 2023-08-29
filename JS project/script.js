"use strict";

const currentEl = document.getElementById("current");
const textEl = document.getElementById("text");
const charactersEl = document.getElementById("characters");

textEl.addEventListener("keyup", () => {
  currentEl.textContent = textEl.value.length;
  if (textEl.value.length > 0) {
    charactersEl.classList.add("active");
  } else charactersEl.classList.remove("active");

  if (textEl.value.length > 10) {
    textEl.style.borderColor = "red";
    textEl.style.color = "red";
    charactersEl.style.color = "red";
  } else {
    textEl.style.borderColor = "#5f0a87";
    textEl.style.color = "#5f0a87";
    charactersEl.style.color = "#5f0a87";
  }
});
