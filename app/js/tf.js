let selectMonth = document.querySelector("#js-select-month");
let selectWeeks = document.querySelector("#tournament__header-week");
let area = document.querySelector(".tournament-area");

let selectTf1 = document.querySelector("#js-select-week");
let selectTf2 = document.querySelector("#js-select-week2");
let selectTf3 = document.querySelector("#js-select-week3");

let areaTf1 = document.querySelectorAll(".tf1");
let areaTf2 = document.querySelectorAll(".tf2");
let areaTf3 = document.querySelectorAll(".tf3");

if (selectMonth) {
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
