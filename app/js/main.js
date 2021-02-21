$(document).ready(function () {
	//  slider-manga
	$('.slider-manga').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		draggable: false,
		fade: true,
		prevArrow: '<button id="prev" type="button" class="btn slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i> Назад</button>',
		nextArrow: '<button id="next" type="button" class="btn slick-next">Вперед <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	});

	//  slider-donate
	$('.slider-donate').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});
});

// slider-manga прокрутка к началу страница
$(document).ready(function () {
	// при клике на "Вперед"
	$('.slider-manga .slick-next').click(function () {
		$('html, body').animate({ scrollTop: 200 }, 'fast');
	});

	// при клике на "Назад"
	$('.slider-manga .slick-prev').click(function () {
		$('html, body').animate({ scrollTop: 200 }, 'fast');
	});
});

$(document).ready(function () {

	//next slide on click
	$(document).on('click', '.slider-manga .slider__item', function () {
		$('html, body').animate({ scrollTop: 200 }, 'fast');
		$(this).closest('.slider-manga').slick('slickNext');
	})

	//count page num
	$('.js-select-page').each(function () {
		var pagesOnSlider = $('.slider-manga').eq($(this).index()).find('.slick-slide').length;
		for (let i = 0; i < pagesOnSlider; i++) {
			$(this).append('<option value="' + parseInt(i) + '">Страница ' + parseInt(i + 1) + '</option>')
		}
	})

	//change slider on select
	$(document).on('change', '.js-select-slider', function () {
		$('.slider-manga').hide();
		$('.slider-manga').eq($(this).find('option:checked').index()).fadeIn(300);
		$('.js-select-page').hide();
		$('.js-select-page').eq($(this).find('option:checked').index()).css('display', 'block');
	})

	//change page on select
	$(document).on('change', '.js-select-page', function () {
		$('.slider-manga').eq($(this).index()).slick('slickGoTo', $(this).find('option:checked').index());
	})

	$('.slider-manga').on('afterChange', function () {
		$('.js-select-page').eq($(this).index()).val($(this).slick('slickCurrentSlide'))
	})
})


var radioBtn = document.querySelectorAll('.radiobuttons__item');
var areaInfo = document.querySelectorAll('[data-area]');

// радионопки
radioBtn.forEach(function (item) {
	if (item) {
		item.addEventListener('click', function () {

			for (i = 0; i < areaInfo.length; i++) {
				if (areaInfo[i].classList.contains(this.lastElementChild.value)) {
					areaInfo[i].classList.remove('hide');
					radioBtn[i].classList.add('active');
				} else {
					areaInfo[i].classList.add('hide');
					radioBtn[i].classList.remove('active');
				}
			}
		});
	}
});


// ___Турнир фракций___
// выбор турнира фракций
var selectMonth = document.querySelector('#js-select-month');
var selectWeeks = document.querySelector('#tournament__header-week');
var area = document.querySelector('.tournament-area');

// выбор недели
var selectTf1 = document.querySelector('#js-select-week');
var selectTf2 = document.querySelector('#js-select-week2');


// Показывает нужную неделю турнира

if (selectMonth) {
	selectMonth.addEventListener('change', function () {
		area.scrollTop = area.clientTop;

		if (selectMonth.value == 'tf1-weeks') {
			selectTf2.classList.add('hide');
			selectTf1.classList.remove('hide');
			selectTf1.firstElementChild.selected = true;
			showAreaTf1();
		} else if (selectMonth.value == 'tf2-weeks') {
			selectTf1.classList.toggle('hide');
			selectTf2.classList.remove('hide');
			selectTf2.firstElementChild.selected = true;
			showAreaTf2();
		} 
	});
}

// console.log(selectTf1.firstElementChild);


// тексотвые поля
var areaTf1 = document.querySelectorAll('.tf1');
var areaTf2 = document.querySelectorAll('.tf2');

// показывает area-tf1(первый)
function showAreaTf1() {
	areaTf1.forEach(function (item) {
		(item.classList.contains('tf1-1w')) ? item.classList.remove('hide')
			: item.classList.add('hide');
	});

	// скрывает  area - tf2
	areaTf2.forEach(function (item) {
		item.classList.add('hide');
	});
};

// показывает area-tf2(первый)
function showAreaTf2() {
	// скрывает  area - tf1
	areaTf1.forEach(function (item) {
		item.classList.add('hide');
	});

	areaTf2.forEach(function (item) {
		(item.classList.contains('tf2-1w')) ? item.classList.remove('hide')
			: item.classList.add('hide');
	});
};


// выбор area по нажатию на конкретную неделю
if (selectTf1) {
	selectTf1.addEventListener('change', function () {
		area.scrollTop = area.clientTop;

		for (i = 0; i < areaTf1.length; i++) {
			(areaTf1[i].classList.contains(this.value)) ? areaTf1[i].classList.remove('hide')
				: areaTf1[i].classList.add('hide');
		}
	});
}

if (selectTf2) {
	selectTf2.addEventListener('change', function () {
		area.scrollTop = area.clientTop;

		for (i = 0; i < areaTf1.length; i++) {
			(areaTf2[i].classList.contains(this.value)) ? areaTf2[i].classList.remove('hide')
				: areaTf2[i].classList.add('hide');
		}
	});
}


var showPop = document.querySelector('#js-user-btn');
var popOverlay = document.querySelector('.js-overlay-campaign');
var closePop = document.querySelector('.js-close-campaign');

if (showPop) {
	showPop.addEventListener('click', function () {
		popOverlay.classList.toggle('hide');
		popOverlay.scrollTop = 0;
	});
}

if (closePop) {
	closePop.addEventListener('click', function () {
		popOverlay.classList.add('hide');
		// popOverlay.classList.toggle('offscroll');
	});
}

if (popOverlay) {
	popOverlay.addEventListener('click', function () {
		popOverlay.classList.add('hide');
	})
}