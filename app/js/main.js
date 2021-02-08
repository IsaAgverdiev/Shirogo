
$(function () {
	$('.slider-manga').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		draggable: false,
		fade: true,
		prevArrow: '<button id="prev" type="button" class="btn slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i> Назад</button>',
		nextArrow: '<button id="next" type="button" class="btn slick-next">Вперед <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	});

	// manga прокрутка к началу страница
	$('.slick-next').click(function () {
		$('html, body').animate({ scrollTop: 200 }, 'fast');
	});
	
	$('.slick-prev').click(function () {
		$('html, body').animate({ scrollTop: 200 }, 'fast');
	});
	// manga

	$('.slider-donate').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	let buttonFilm		= document.getElementById('button-film'),
			buttonSerial	= document.getElementById('button-serial'),
			buttonGame		= document.getElementById('button-game'),
			buttonMusic		= document.getElementById('button-music');

	let film		= document.getElementById('film'),
			serial	= document.getElementById('serial'),
			game		= document.getElementById('game'),
			music		= document.getElementById('music');


	// film
	buttonFilm.onclick = function () {
		film.classList.remove('hide');
		serial.classList.add('hide');
		game.classList.add('hide');
		music.classList.add('hide');
	};
	// serial
	buttonSerial.onclick = function () {
		serial.classList.remove('hide');
		film.classList.add('hide');
		game.classList.add('hide');
		music.classList.add('hide');
	};
	// game
	buttonGame.onclick = function () {
		game.classList.remove('hide');
		film.classList.add('hide');
		serial.classList.add('hide');
		music.classList.add('hide');
	};
	// music
	buttonMusic.onclick = function () {
		music.classList.remove('hide');
		film.classList.add('hide');
		serial.classList.add('hide');
		game.classList.add('hide');
	};

// tournament fract
	// select numder TF
	var filter_select_month = document.getElementById('js-select-month');
	var filter_select_weeks = document.getElementById('tournament__header-week');
	
	filter_select_month.onchange = function () {
		var filter_select = filter_select_weeks.getElementsByClassName('tournament__select-week');
		for (var i = 0; i < filter_select.length; i++) {
			if (filter_select[i].classList.contains(this.value)) {
				filter_select[i].style.display = 'block';
			} else {
				filter_select[i].style.display = 'none';
			}
		}
	};
	//	select numder TF
	
	//	select week
	var filter_select_week = document.getElementById('js-select-week');
	var filter_select_week2 = document.getElementById('js-select-week2');
	var items_week = document.getElementById('tournament-area');
	
	
	filter_select_week.onchange = function () {
		var items = items_week.getElementsByClassName('tournament-area__inner');
		for (var i = 0; i < items.length; i++) {
			if (items[i].classList.contains(this.value)) {
				items[i].style.display = 'block';
				items_week.scrollTop = 0;
			} else {
				items[i].style.display = 'none';
			}
		}
	};
	
	filter_select_week2.onchange = function () {
		var items = items_week.getElementsByClassName('tournament-area__inner');
		for (var i = 0; i < items.length; i++) {
			if (items[i].classList.contains(this.value)) {
				items[i].style.display = 'block';
				items_week.scrollTop = 0;
			} else {
				items[i].style.display = 'none';
			}
		}
	};

	// Модальное окно

// открыть по кнопке
$('.js-user-btn').click(function () {

	$('.js-overlay-campaign').fadeIn(0);
	$('.js-overlay-campaign').addClass('hide');
	window.onscroll = function () { window.scrollTo(0, 0); };
});

// закрыть на крестик
$('.js-close-campaign').click(function () {
	$('.js-overlay-campaign').fadeOut(0);
	window.onscroll = function () { window.scrollTo(auto, auto); }
});


// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign').fadeOut(0);
		window.onscroll = function () { window.scrollTo(auto, auto); }
	}
});

});


