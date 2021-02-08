$(document).ready(function () {

    //next slide on click
    $(document).on('click', '.slider-manga .slider__item', function(){
        $(this).closest('.slider-manga').slick('slickNext');
    })

    //count page num
    $('.js-select-page').each(function(){
        var pagesOnSlider = $('.slider-manga').eq($(this).index()).find('.slick-slide').length;
        for(let i = 0; i < pagesOnSlider; i++){
            $(this).append('<option value="'+ parseInt(i) +'">Страница ' + parseInt(i + 1) + '</option>')
        }
    })

    //change slider on select
    $(document).on('change', '.js-select-slider', function(){
        $('.slider-manga').hide();
        $('.slider-manga').eq($(this).find('option:checked').index()).fadeIn(300);
        $('.js-select-page').hide();
        $('.js-select-page').eq($(this).find('option:checked').index()).css('display', 'block');
    })
    
    //change page on select
    $(document).on('change', '.js-select-page', function(){
        $('.slider-manga').eq($(this).index()).slick('slickGoTo', $(this).find('option:checked').index());
    })

    $('.slider-manga').on('afterChange', function(){
        $('.js-select-page').eq($(this).index()).val($(this).slick('slickCurrentSlide'))
    })
})