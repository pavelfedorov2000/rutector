$(function() {

    $('.banner__slider').slick({
        dots: true,
        prevArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');

        $('.products__slider').slick('setPosition'); // Инициализация слайдера
    });

    // Star rating
    $(".rate-yo").rateYo({
        starWidth: "10px",
        spacing: "0.83px",
        ratedFill: "#FFC107",
        normalFill: "#DDE1E7",
        readOnly: true
    });
    $(".product-page__card-rateyo").rateYo({
        starWidth: "16.55px",
        spacing: "1.81px",
        ratedFill: "#FFC107",
        normalFill: "#DDE1E7",
        readOnly: true
    });
    $(".product-page__review-rateyo").rateYo({
        starWidth: "13.52px",
        spacing: "1.48px",
        ratedFill: "#FFC107",
        normalFill: "#DDE1E7",
        readOnly: true
    });
    $(".product-page__review-newrateyo").rateYo({
        starWidth: "18.39px",
        spacing: "2.01px",
        ratedFill: "#FFC107",
        normalFill: "#BAC0C7"
    });

    $('.products__slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn products__slider-btn products__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn products__slider-btn products__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.banners__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.catalog-page__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.drop').on('click', function() {
        $(this).toggleClass('drop--active');
        $('.hidden-text').slideToggle('200');
    });

    $('.brand-page__slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.popular-products__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.banner-slider').slick({
        prevArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.pagination__btn--grid').on('click', function(){
        $(this).addClass('pagination__btn--active');
        $('.pagination__btn--line').removeClass('pagination__btn--active');
        $('.catalog__list--grid').addClass('catalog__list--active');
        $('.catalog__list--line').removeClass('catalog__list--active');
    });

    $('.pagination__btn--line').on('click', function(){
        $(this).addClass('pagination__btn--active');
        $('.pagination__btn--grid').removeClass('pagination__btn--active');
        $('.catalog__list').addClass('catalog__list--active');
        $('.catalog__list--grid').removeClass('catalog__list--active');
    });

    $('.count-btn').on('click', function() {
        $('.overlay, #bill').fadeIn('slow');
    });
    $('.modal__close, .form__btn--continue-buying').on('click', function() {
        $('.overlay, .modal').fadeOut('slow');
    });

    /* function validateForms(form) {
        $(form).validate({});
    } */

    //validateForms('.modal__form');
    //validateForms('#modal-mini form');

    $('.modal__form-btn').on('click', function(){
        if ($('.modal__form-input') == '') {
            $('.modal__form-input').addClass('error');
        }
    });

    /* $(':input').on('input keyup change paste', function(){
        if($(this).hasClass('error')) {
          $(this).removeClass('error');
        }
    });
    $(':input').on('blur', function(){
        if($(this).val() == '') {
          $(this).removeClass('error');
        }
    }); */

    /* $('form').submit(function(e) {
        e.preventDefault(); // Отключаем перезагрузку страницы просле отправки формы - стандартное поведение браузера.
        $.ajax({
            type: "POST", // Отдаем данные
            url: "mailer/smart.php", // куда будет отправляться запрос
            data: $(this).serialize() // Данные, которые отправляются
        }).done(function() {
            $(this).find("input").val(""); // Очищаем инпуты
            $('.overlay, .modal').fadeOut();
            $('form').trigger('reset'); // Все формы должны очиститься
        });
        return false;
    }); */


    //$('input[name=phone]').mask("+375 (99) 999-99-99"); //  маска ввода в инпутах

    $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
        return false;
    });
});