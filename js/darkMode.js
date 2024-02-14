const slider = document.querySelector(".slider");

const header = document.querySelector("header");

const white = document.querySelector("main");

const footer = document.querySelector("footer");

const sides = document.querySelector("section");

const body = document.querySelector("body");

const topPicture = document.querySelector(".logo");
const notUpPictures = document.querySelector(".footer-logo");

const btnArrow = document.querySelectorAll(".portfoliobtn");

const btnArrowImgL = document.getElementById("portfoliobtnL");
const btnArrowImgR = document.getElementById("portfoliobtnR");

const text1 = document.querySelectorAll("p");
const text2 = document.querySelectorAll("h3");
const text3 = document.querySelector("h4");
const text4 = document.querySelector("h1");
const text5 = document.querySelector("h5");

const btns = document.querySelectorAll("button");

let theme = true;

let hr0Theme = document.querySelector(`.hr0`);

let hr1Theme = document.querySelector(`.hr1`);

let hr2Theme = document.querySelector(`.hr2`);

let hr3Theme = document.querySelector(`.hr3`);

let hr4Theme = document.querySelector(`.hr4`);

let hr5Theme = document.querySelector(`.hr5`);

let hr6Theme = document.querySelector(`.hr6`);

let hr7Theme = document.querySelector(`.hr7`);

let hr8Theme = document.querySelector(`.hr8`);

let hr9Theme = document.querySelector(`.hr9`);

let result = document.querySelector(".calculatorResult");
let calculatorEqual = document.querySelector(".calculatorEqual");

let line = document.querySelector(`.timeCalculatorLine`);
let calculatorResult = document.querySelector(".calculatorResult");
let sortGamesWindow = document.querySelectorAll(".sortGamesBtns");
let sortGamesWindow1 = document.querySelector(".sortGames");

let stoneBtn1 = document.querySelector(`.stoneImg`);
let scrissorsBtn1 = document.querySelector(`.scrissorsImg`);
let papierBtn1 = document.querySelector(`.papierImg`);

const modalThxBoxBG = document.querySelector(`.modalBox2`);
const modalBoxBG = document.querySelector(`.modalBox1`);
const modalBox = document.querySelector(`.modalWindow`);
const modalThxBox = document.querySelector(`.modalThankYouWindow`);
const xmark = document.querySelectorAll(`.closeModalWindowImg`);

const icon1 = document.getElementById(`gameIcons1`);
const icon2 = document.getElementById(`gameIcons2`);
const icon3 = document.getElementById(`gameIcons3`);
const icon4 = document.getElementById(`gameIcons4`);

console.log(xmark);

slider.addEventListener("click", function () {
  if (theme) {
    darkTheme();
    textColorChangeDark();
    btnDark();
    hrDark();
    gameDark();
    sortGamesWindowDark();
    modalBoxesDark();
  } else {
    lightTheme();
    textColorChangeLight();
    btnLight();
    hrLight();
    gameLight();
    sortGamesWindowLight();
    modalBoxesLight();
  }
});

function modalBoxesDark() {
  modalThxBox.style.backgroundColor = `#474554`;
  modalBox.style.backgroundColor = `#474554`;
  xmark.forEach(function (mark) {
    mark.src = "./img/icon/iconCloseDark.svg";
  });
}

function modalBoxesLight() {
  modalThxBox.style.backgroundColor = `#fff`;

  modalBox.style.backgroundColor = `#fff`;
  xmark.forEach(function (mark) {
    mark.src = "./img/icon/iconClose.svg";
  });
}
function hrDark() {
  hr0Theme.style.backgroundColor = `#fff`;
  hr1Theme.style.backgroundColor = `#fff`;
  hr2Theme.style.backgroundColor = `#fff`;
  hr3Theme.style.backgroundColor = `#fff`;
  hr4Theme.style.backgroundColor = `#fff`;
  hr5Theme.style.backgroundColor = `#fff`;
  hr6Theme.style.backgroundColor = `#fff`;
  hr7Theme.style.backgroundColor = `#fff`;
  hr8Theme.style.backgroundColor = `#fff`;
  hr9Theme.style.backgroundColor = `#fff`;
  calculatorResult.style.color = `#7E7E7E`;
  line.style.border = `1px dashed #fff`;
  calculatorEqual.style.backgroundColor = `#fff`;
  calculatorEqual.style.color = `#000`;
}
function hrLight() {
  hr0Theme.style.backgroundColor = `#000`;
  hr1Theme.style.backgroundColor = `#000`;
  hr2Theme.style.backgroundColor = `#000`;
  hr3Theme.style.backgroundColor = `#000`;
  hr4Theme.style.backgroundColor = `#000`;
  hr5Theme.style.backgroundColor = `#000`;
  hr6Theme.style.backgroundColor = `#000`;
  hr7Theme.style.backgroundColor = `#000`;
  hr8Theme.style.backgroundColor = `#000`;
  hr9Theme.style.backgroundColor = `#000`;
  calculatorResult.style.color = `#7E7E7E`;
  line.style.border = `1px dashed #000000c2`;
  calculatorEqual.style.backgroundColor = `#000`;
  calculatorEqual.style.color = `#fff`;
}
function gameDark() {
  stoneBtn1.src = "./img/icon/rockDark.png";
  scrissorsBtn1.src = "./img/icon/scissorsDark.png";
  papierBtn1.src = "./img/icon/paperDark.png";
}
function gameLight() {
  stoneBtn1.src = "./img/icon/rock.png";
  scrissorsBtn1.src = "./img/icon/scissors.png";
  papierBtn1.src = "./img/icon/paper.png";
}
function btnLight() {
  btns.forEach(function (btn) {
    btn.style.backgroundColor = "#000";
    btn.style.color = "#fff";
    btn.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,0.20)";
  });

  btnArrow.forEach(function (arrow) {
    arrow.style.color = "#000";

    arrow.style.backgroundColor = "transparent";
    arrow.style.boxShadow = "none";
  });
  btnArrowImgL.src = "./img/arrowLeft.svg";
  btnArrowImgR.src = "./img/arrowRight.svg";
}
function btnDark() {
  btns.forEach(function (btn) {
    btn.style.backgroundColor = "#FAF8FF";

    btn.style.color = "#000";
    btn.style.boxShadow = "3px 3px 0px 0px rgba(255, 255, 255, 0.2)";
  });

  btnArrow.forEach(function (arrow) {
    arrow.style.backgroundColor = "transparent";
    arrow.style.boxShadow = "none";
  });

  btnArrowImgL.src = "./img/arrowLeftDark.svg";
  btnArrowImgR.src = "./img/arrowRightDark.svg";
}

function textColorChangeLight() {
  text1.forEach(function (text) {
    text.style.color = "#000";
  });
  text2.forEach(function (text) {
    text.style.color = "#000";
  });
  text3.style.color = "#000";
  text4.style.color = "#000";
  text5.style.color = "#000";
}
function textColorChangeDark() {
  text1.forEach(function (text) {
    text.style.color = "#FAF8FF";
  });
  text2.forEach(function (text) {
    text.style.color = "#FAF8FF";
  });
  text3.style.color = "#FAF8FF";
  text4.style.color = "#FAF8FF";
  text5.style.color = "#FAF8FF";
}

function sortGamesWindowDark() {
  sortGamesWindow.forEach(function (sort) {
    sort.style.color = `#fff`;
    sort.style.backgroundColor = `#474554`;

    sort.addEventListener(`mouseover`, function () {
      sort.style.backgroundColor = `#817E97`;
    });
    sort.addEventListener(`mouseout`, function () {
      sort.style.backgroundColor = `#474554`;
    });
    sort.addEventListener(`mousedown`, function () {
      sort.style.backgroundColor = `#B9B6CF`;
    });
    sort.addEventListener(`mouseup`, function () {
      sort.style.backgroundColor = `#474554`;
    });
    sortGamesWindow1.style.border = `1px solid #fff`;
    sortGamesWindow1.style.borderTop = `none`;
  });
}
function sortGamesWindowLight() {
  sortGamesWindow.forEach(function (sort) {
    sort.style.color = `#000`;
    sort.style.backgroundColor = `#fff`;
    sort.addEventListener(`mouseover`, function () {
      sort.style.backgroundColor = `#f1f1f1`;
    });
    sort.addEventListener(`mouseout`, function () {
      sort.style.backgroundColor = `#fff`;
    });
    sort.addEventListener(`mousedown`, function () {
      sort.style.backgroundColor = `#b9b9b9`;
    });
    sort.addEventListener(`mouseup`, function () {
      sort.style.backgroundColor = `#fff`;
    });
    sortGamesWindow1.style.border = `1px solid #000`;
    sortGamesWindow1.style.borderTop = `none`;
  });
}

function lightTheme() {
  white.style.color = "#000";
  white.style.backgroundColor = "#fff";
  white.style.borderRight = "1px solid black";
  white.style.borderLeft = "1px solid black";

  header.style.backgroundColor = "#fff";
  header.style.color = "#000";
  header.style.boxShadow = "0px 17px 23px 0px rgba(0,0,0,0.1)";

  footer.style.backgroundColor = "#fff";
  footer.style.borderTop = "1px solid black";

  footer.style.color = "#000";
  body.style.backgroundColor = "#fff";

  sides.style.backgroundImage =
    'url("../img/backgroundLeft.svg"), url("../img/backgroundRight.svg")';

  topPicture.style.backgroundImage = 'url("../img/logo.svg")';
  notUpPictures.style.backgroundImage = 'url("../img/logo.svg")';

  console.log("white");

  theme = true;
}

function darkTheme() {
  white.style.backgroundColor = "#474554";
  white.style.color = "#FAF8FF";
  white.style.borderRight = "#FAF8FF 1px solid";
  white.style.borderLeft = "#FAF8FF 1px solid";

  header.style.backgroundColor = "#474554";
  header.style.color = "#FAF8FF";
  header.style.boxShadow = "0px 17px 23px 0px rgba(255,255,255,0.1)";

  footer.style.backgroundColor = "#474554";
  footer.style.borderTop = "#FAF8FF 1px solid ";

  footer.style.color = "#FAF8FF";
  body.style.backgroundColor = "#000";

  sides.style.backgroundImage =
    'url("../img/backgroundLeftDark.svg"), url("../img/backgroundRightDark.svg")';

  topPicture.style.backgroundImage = 'url("../img/logo__darkTheme.svg")';
  notUpPictures.style.backgroundImage = 'url("../img/logo__darkTheme.svg")';

  console.log("dark");

  theme = false;
}
