let showPopUser = document.querySelectorAll(".user-btn");
let popOverlayUser = document.querySelector(".js-overlay-campaign");
let closePopUser = document.querySelector(".js-close-campaign");

popOverlayUser.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("js-close-campaign") || target.classList.contains("js-overlay-campaign")) {
    closeUserPop();
  }
});

openUserPop();

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