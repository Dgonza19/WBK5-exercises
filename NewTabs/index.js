"use strict";

window.onload = function () {
  const googleBtn = document.getElementById("googleBtn");
  const w3Btn = document.getElementById("w3Btn");
  const imgBtn = document.getElementById("imgBtn");

  googleBtn.onclick = googleBtnClicked;
  w3Btn.onclick = w3BtnClicked;
  imgBtn.onclick = imgBtnClicked;
}


function googleBtnClicked() {
  console.log("Google");
  window.open("https://www.google.com");
};

function w3BtnClicked() {
  console.log("W3Schools");
  window.open("https://www.w3schools.com");
};

function imgBtnClicked() {
  console.log("Images");
  window.open("images.html");
}


