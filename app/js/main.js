$(document).ready(function () {
  //  slider-manga
  $(".slider-manga").slick({
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    fade: true,
    touchMove: true,
    prevArrow: '<button id="prev" type="button" class="btn slick-prev">Назад<i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="btn slick-next">Вперед<i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  });

  //  slider-donate
  $(".slider-donate").slick({
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });
});

$(document).ready(function () {
  //next slide on click
  $(document).on("click", ".slider-donate .slider-donate__item-image", function () {
    $(this).closest(".slider-donate").slick("slickNext");
  });
});
// slider-manga прокрутка к началу страница
$(document).ready(function () {
  // при клике на "Вперед"
  $(".slider-manga .slick-next").click(function () {
    if (document.documentElement.clientWidth > 767) {
      $("html, body").animate({ scrollTop: 200 }, "fast");
    }
  });

  // при клике на "Назад"
  $(".slider-manga .slick-prev").click(function () {
    if (document.documentElement.clientWidth > 767) {
      $("html, body").animate({ scrollTop: 200 }, "fast");
    }
  });
});

$(document).ready(function () {
  //next slide on click
  $(document).on("click", ".slider-manga .slider__item", function () {
    if (document.documentElement.clientWidth > 767) {
      $("html, body").animate({ scrollTop: 200 }, "fast");
    }
    $(this).closest(".slider-manga").slick("slickNext");
  });

  //count page num
  $(".js-select-page").each(function () {
    var pagesOnSlider = $(".slider-manga").eq($(this).index()).find(".slick-slide").length;
    for (let i = 0; i < pagesOnSlider; i++) {
      $(this).append('<option value="' + parseInt(i) + '">Страница ' + parseInt(i + 1) + "</option>");
    }
  });

  //change slider on select
  $(document).on("change", ".js-select-slider", function () {
    $(".slider-manga").hide();
    $(".slider-manga").eq($(this).find("option:checked").index()).fadeIn(300);
    $(".js-select-page").hide();
    $(".js-select-page").eq($(this).find("option:checked").index()).css("display", "block");
  });

  //change page on select
  $(document).on("change", ".js-select-page", function () {
    $(".slider-manga").eq($(this).index()).slick("slickGoTo", $(this).find("option:checked").index());
  });

  $(".slider-manga").on("afterChange", function () {
    $(".js-select-page").eq($(this).index()).val($(this).slick("slickCurrentSlide"));
  });
});

$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });
});

let radioBtn = document.querySelectorAll(".radiobuttons__item");
let radioButtons = document.querySelector(".information-menu__radiobuttons");
let areaInfo = document.querySelectorAll("[data-area]");

let selectMonth = document.querySelector("#js-select-month");
let selectWeeks = document.querySelector("#tournament__header-week");
let area = document.querySelector(".tournament-area");

let selectTf1 = document.querySelector("#js-select-week");
let selectTf2 = document.querySelector("#js-select-week2");
let selectTf3 = document.querySelector("#js-select-week3");

let areaTf1 = document.querySelectorAll(".tf1");
let areaTf2 = document.querySelectorAll(".tf2");
let areaTf3 = document.querySelectorAll(".tf3");

let showPopMine = document.querySelector("#js-btn-minecraft");
let modalMine = document.querySelector(".js-popup-minecraft");
let popOverlayMine = document.querySelector(".js-overlay-minecraft");
let closePopMine = document.querySelector(".js-close-minecraft");

let showPopUser = document.querySelectorAll(".user-btn");
let popOverlayUser = document.querySelector(".js-overlay-campaign");
let closePopUser = document.querySelector(".js-close-campaign");

let openMenuBtn = document.querySelector(".btn-burger");
let overlayMenu = document.querySelector(".overlay-menu");
let menu = document.querySelector(".menu768");
let body = document.body;
let fixBlocks = document.querySelectorAll(".fix-blocks");

if (radioButtons) {
  radioButtons.addEventListener("click", (e) => {
    let item = event.target.closest("div");
    if (item.classList.contains("radiobuttons__item")) {
      showArea.call(item);
    }
  });
  selectMonth.addEventListener("change", showWeeks);
}

function getAreaOnWeek(changeTf = selectTf1, areaTfShow = areaTf1) {
  changeTf.addEventListener("change", function () {
    area.scrollTop = area.clientTop;

    for (i = 0; i < areaTfShow.length; i++) {
      areaTfShow[i].classList.contains(this.value) ? areaTfShow[i].classList.remove("hide") : areaTfShow[i].classList.add("hide");
    }
  });
}
if (selectMonth) {
  getAreaOnWeek();
}

if (popOverlayMine) {
  popOverlayMine.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("js-close-minecraft") || target.classList.contains("js-overlay-minecraft")) {
      closeMinePop();
    }
  });
  showPopMine.addEventListener("click", openMinePop);
}

popOverlayUser.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("js-close-campaign") || target.classList.contains("js-overlay-campaign")) {
    closeUserPop();
  }
});
openUserPop();

openMenuBtn.addEventListener("mousedown", showRightMenu);

function showArea() {
  for (i = 0; i < areaInfo.length; i++) {
    if (areaInfo[i].classList.contains(this.lastElementChild.value)) {
      areaInfo[i].classList.remove("hide");
      radioBtn[i].classList.add("active");
    } else {
      areaInfo[i].classList.add("hide");
      radioBtn[i].classList.remove("active");
    }
  }
}

function showWeeks() {
  area.scrollTop = area.clientTop;
  if (selectMonth.value === "tf1-weeks") {
    selectTf2.classList.add("hide");
    selectTf3.classList.add("hide");
    selectTf1.classList.remove("hide");
    selectTf1.firstElementChild.selected = true;
    showAreaTf(areaTf1, areaTf2, areaTf3, "tf1-1w");
    getAreaOnWeek(selectTf1, areaTf1);
  } else if (selectMonth.value === "tf2-weeks") {
    selectTf1.classList.add("hide");
    selectTf3.classList.add("hide");
    selectTf2.classList.remove("hide");
    selectTf2.firstElementChild.selected = true;
    showAreaTf(areaTf2, areaTf1, areaTf3, "tf2-1w");
    getAreaOnWeek(selectTf2, areaTf2);
  } else if (selectMonth.value === "tf3-weeks") {
    selectTf1.classList.add("hide");
    selectTf2.classList.add("hide");
    selectTf3.classList.remove("hide");
    selectTf3.firstElementChild.selected = true;
    showAreaTf(areaTf3, areaTf1, areaTf2, "tf3-1w");
    getAreaOnWeek(selectTf3, areaTf3);
  }
}

function showAreaTf(addTf, remove1, remove2, tfWeek) {
  addTf.forEach(function (item) {
    item.classList.contains(tfWeek) ? item.classList.remove("hide") : item.classList.add("hide");
  });
  remove1.forEach(function (item) {
    item.classList.add("hide");
  });
  remove2.forEach(function (item) {
    item.classList.add("hide");
  });
}

function openMinePop() {
  disableScroll();
  popOverlayMine.classList.toggle("hide");
  popOverlayMine.scrollTop = 0;
}

function closeMinePop() {
  enableScroll();
  popOverlayMine.classList.add("hide");
}

function openUserPop() {
  showPopUser.forEach((el) => {
    el.addEventListener("click", function () {
      disableScroll();
      popOverlayUser.classList.toggle("hide");
    });
  });
}
function closeUserPop() {
  enableScroll();
  popOverlayUser.classList.add("hide");
}

if (document.documentElement.clientWidth > 767) {
  enableScroll();
}

function showRightMenu() {
  disableScroll();
  openMenuBtn.classList.toggle("btn-burger--clouse");
  menu.classList.toggle("hide-menu");
  overlayMenu.classList.toggle("hide");
  if (overlayMenu.classList.contains("hide")) {
    enableScroll();
  }
}

function disableScroll() {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  body.style.paddingRight = paddingOffset;
  let pagePosition = window.scrollY;
  body.classList.add("disable-scroll");
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + "px";
}
function enableScroll() {
  let fixBlocks = document.querySelectorAll(".fix-blocks");
  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });
  body.style.paddingRight = "0px";
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = "auto";
  body.classList.remove("disable-scroll");
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute("data-position");
}

var iframe = document.querySelector(".level__inner");
if (iframe) {
  iframe.addEventListener("click", function (e) {
    e.preventDefault();
  });
}
