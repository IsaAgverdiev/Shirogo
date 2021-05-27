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