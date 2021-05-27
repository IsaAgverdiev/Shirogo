let openMenuBtn = document.querySelector(".btn-burger");
let overlayMenu = document.querySelector(".overlay-menu");
let menu = document.querySelector(".menu768");
let body = document.body;
let fixBlocks = document.querySelectorAll(".fix-blocks");

openMenuBtn.addEventListener("mousedown", showRightMenu);

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
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  console.log(document.body.offsetWidth);
  
	let pagePosition = window.scrollY;
	fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body.style.paddingRight = paddingOffset;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = "auto";
  body.classList.remove("disable-scroll");
  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });
  body.style.paddingRight = "0px";
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute("data-position");
}


