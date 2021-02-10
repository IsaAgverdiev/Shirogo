
$(document).ready(function () {
	//  **slider-manga
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
		fade: true,
	});
	//  **slider-manga


	// **radiobuttons
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.information-menu__radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.information-menu__radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});

	// vars
	let buttonFilm = document.getElementById('button-film'),
		buttonSerial = document.getElementById('button-serial'),
		buttonGame = document.getElementById('button-game'),
		buttonMusic = document.getElementById('button-music');

	let film = document.getElementById('film'),
		serial = document.getElementById('serial'),
		game = document.getElementById('game'),
		music = document.getElementById('music');
	// vars

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
	// **radiobuttons

	// **tournament fract
	// select numder TF
	var filter_select_month = document.getElementById('js-select-month');
	var filter_select_weeks = document.getElementById('tournament__header-week');

	filter_select_month.onchange = function () {

		var filter_select = filter_select_weeks.getElementsByClassName('tournament__select-week');
		for (var i = 0; i < filter_select.length; i++) {
			if (filter_select[i].classList.contains(this.value)) {
				filter_select[i]
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
	var items = document.getElementsByClassName('tournament-area__inner');
	var tournamentArea1 = document.getElementById('tournament-area-tf1');
	var tournamentArea2 = document.getElementById('tournament-area-tf2');


	filter_select_week.onchange = function () {
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
		for (var i = 0; i < items.length; i++) {
			if (items[i].classList.contains(this.value)) {
				items[i].style.display = 'block';
				items_week.scrollTop = 0;
			} else {
				items[i].style.display = 'none';
			}
		}
	};
	// **tournament fract

	// **Модальное окно
	// открыть по кнопке

	let btn = document.getElementsByClassName('js-user-btn');
	let overlay = document.getElementsByClassName('js-overlay-campaign');
	
		btn.onclick = function () {
			overlay.toggleClass('.active');
		};

});
	// **Модальное окно


