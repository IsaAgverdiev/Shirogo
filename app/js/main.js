$(document).ready(function () {
	//  slider-manga
	$('.slider-manga').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		draggable: false,
		fade: true,
		prevArrow: '<button id="prev" type="button" class="btn slick-prev">Назад<i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button id="next" type="button" class="btn slick-next">Вперед<i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	});

	//  slider-donate
	$('.slider-donate').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});
});

$(document).ready(function () {
	//next slide on click
	$(document).on('click', '.slider-donate .slider-donate__item-image', function () {
		$(this).closest('.slider-donate').slick('slickNext');
	})
});
// slider-manga прокрутка к началу страница
$(document).ready(function () {
	// при клике на "Вперед"
	$('.slider-manga .slick-next').click(function () {
		if (document.documentElement.clientWidth > 767) {
			$('html, body').animate({ scrollTop: 200 }, 'fast');
		}
	});

	// при клике на "Назад"
	$('.slider-manga .slick-prev').click(function () {
		if (document.documentElement.clientWidth > 767) {
			$('html, body').animate({ scrollTop: 200 }, 'fast');
		}
	});
});

$(document).ready(function () {
	//next slide on click
	$(document).on('click', '.slider-manga .slider__item', function () {
		if (document.documentElement.clientWidth > 767) {
			$('html, body').animate({ scrollTop: 200 }, 'fast');
		}
		$(this).closest('.slider-manga').slick('slickNext');
	});

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

$(document).ready(function () {
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
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
var selectTf3 = document.querySelector('#js-select-week3');


// Показывает нужную неделю турнира
if (selectMonth) {
	selectMonth.addEventListener('change', function () {
		area.scrollTop = area.clientTop;

		if (selectMonth.value == 'tf1-weeks') {
			selectTf2.classList.add('hide');
			selectTf3.classList.add('hide');
			selectTf1.classList.remove('hide');
			selectTf1.firstElementChild.selected = true;
			showAreaTf1();
		} else if (selectMonth.value == 'tf2-weeks') {
			selectTf1.classList.add('hide');
			selectTf3.classList.add('hide');
			selectTf2.classList.remove('hide');
			selectTf2.firstElementChild.selected = true;
			showAreaTf2();
		} else if (selectMonth.value == 'tf3-weeks') {
			selectTf1.classList.add('hide');
			selectTf2.classList.add('hide');
			selectTf3.classList.remove('hide');
			selectTf3.firstElementChild.selected = true;
			showAreaTf3();
		}
	});
}

// тексотвые поля
var areaTf1 = document.querySelectorAll('.tf1');
var areaTf2 = document.querySelectorAll('.tf2');
var areaTf3 = document.querySelectorAll('.tf3');

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
	// скрывает  area - tf3
	areaTf3.forEach(function (item) {
		item.classList.add('hide');
	});
};

// показывает area-tf2(первый)
function showAreaTf2() {
	// скрывает  area - tf1
	areaTf1.forEach(function (item) {
		item.classList.add('hide');
	});
	// скрывает  area - tf3
	areaTf3.forEach(function (item) {
		item.classList.add('hide');
	});
	areaTf2.forEach(function (item) {
		(item.classList.contains('tf2-1w')) ? item.classList.remove('hide')
			: item.classList.add('hide');
	});
};

// показывает area-tf3(первый)
function showAreaTf3() {
	// скрывает  area - tf1
	areaTf1.forEach(function (item) {
		item.classList.add('hide');
	});
	// скрывает  area - tf3
	areaTf2.forEach(function (item) {
		item.classList.add('hide');
	});
	areaTf3.forEach(function (item) {
		(item.classList.contains('tf3-1w')) ? item.classList.remove('hide')
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

		for (i = 0; i < areaTf2.length; i++) {
			(areaTf2[i].classList.contains(this.value)) ? areaTf2[i].classList.remove('hide')
				: areaTf2[i].classList.add('hide');
		}
	});
}

if (selectTf3) {
	selectTf3.addEventListener('change', function () {
		area.scrollTop = area.clientTop;

		for (i = 0; i < areaTf3.length; i++) {
			(areaTf3[i].classList.contains(this.value)) ? areaTf3[i].classList.remove('hide')
				: areaTf3[i].classList.add('hide');
		}
	});
}

// находим нужные элементы Minecraft
var showPopMine = document.querySelector('#js-btn-minecraft');
var popOverlayMine = document.querySelector('.js-overlay-minecraft');
var closePopMine = document.querySelector('.js-close-minecraft');

// Прослушиваем клик на модальное окно и не передает клик родителю
if (popOverlayMine) {
	popOverlayMine.querySelector('.modal-content').addEventListener('click', function (event) {
		event.stopPropagation();
	});
}


// Открываем модальное окно по клику на баннер
if (showPopMine) {
	showPopMine.addEventListener('click', function () {
		disableScroll();
		popOverlayMine.classList.toggle('hide');
		popOverlayMine.scrollTop = 0;
	});
}

// Закрываем модальное окно по клику на крестик
if (showPopMine) {
	closePopMine.addEventListener('click', function () {
		enableScroll();
		popOverlayMine.classList.add('hide');
	});
}

// Закрываем модальное окно по клику на область вокруг
if (showPopMine) {
	popOverlayMine.addEventListener('click', function () {
		enableScroll();
		popOverlayMine.classList.add('hide');
	});
}


// находим нужные элементы User
var showPop = document.querySelectorAll('.user-btn');
var popOverlay = document.querySelector('.js-overlay-campaign');
var closePop = document.querySelector('.js-close-campaign');

// Прослушиваем клик на модальное окно и не передает клик родителю
if (popOverlay) {
	popOverlay.querySelector('.modal-content').addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

// Открываем модальное окно по клику на кнопку
showPop.forEach((el) => {
	el.addEventListener('click', function () {
		disableScroll();
		popOverlay.classList.toggle('hide');
	});
})

// Закрываем модальное окно по клику на крестик
if (closePop) {
	closePop.addEventListener('click', function () {
		enableScroll();
		popOverlay.classList.add('hide');
	});
}

// Закрываем модальное окно по клику на область вокруг
if (popOverlay) {
	popOverlay.addEventListener('click', function () {
		enableScroll();
		popOverlay.classList.add('hide');
	})
}

// открытие бокового меню по клику
var openMenuBtn = document.querySelector('.btn-burger');
var overlayMenu = document.querySelector('.overlay-menu');
var menu = document.querySelector('.menu768')
var body = document.body;
var fixBlocks = document.querySelectorAll('.fix-blocks');
// возвращение скрола при маштабировании
if (document.documentElement.clientWidth > 767) {
	enableScroll();
}
// показ бокового меню
function showRightMenu() {
	openMenuBtn.classList.toggle('btn-burger--clouse');
	menu.classList.toggle('hide-menu');
	overlayMenu.classList.toggle('hide');
}

// появление\скрытие меню + фиксация скролла по клику
openMenuBtn.addEventListener('mousedown', function () {
	disableScroll();
	showRightMenu();
	if (overlayMenu.classList.contains('hide')) {
		enableScroll();
	}
});

function disableScroll() {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body.style.paddingRight = paddingOffset;
	let pagePosition = window.scrollY;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
};
function enableScroll() {
	let fixBlocks = document.querySelectorAll('.fix-blocks');
	fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body.style.paddingRight = '0px';
	let pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position')
};

// блокирование запросов iframe
var iframe = document.querySelector('.level__inner');
if (iframe) {
	iframe.addEventListener('click', function (e) {
		e.preventDefault()
	})
}