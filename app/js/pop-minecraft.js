// let showPopMine = document.querySelector("#js-btn-minecraft");
let showPopMine = document.querySelector(".minecfart-wrapper__image");
let modalMine = document.querySelector(".js-popup-minecraft");
let popOverlayMine = document.querySelector(".js-overlay-minecraft");
let closePopMine = document.querySelector(".js-close-minecraft");

if (popOverlayMine) {
  popOverlayMine.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    if (target.classList.contains("js-close-minecraft") || target.classList.contains("js-overlay-minecraft")) {
      closeMinePop();
    }
  });
  showPopMine.addEventListener("click", (e) => {
    e.stopPropagation();
    openMinePop();
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
