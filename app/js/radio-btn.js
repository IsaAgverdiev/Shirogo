let radioBtn = document.querySelectorAll(".radiobuttons__item");
let radioButtons = document.querySelector(".information-menu__radiobuttons");
let areaInfo = document.querySelectorAll("[data-area]");

if (radioButtons) {
  radioButtons.addEventListener("click", (e) => {
    let item = event.target.closest("div");
    if (item.classList.contains("radiobuttons__item")) {
      showArea.call(item);
    }
  });
}

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