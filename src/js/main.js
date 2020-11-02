$(function() {

    // Sliders
    $('.banner__slider').slick({
        dots: true,
        prevArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.products__slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn products__slider-btn products__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn products__slider-btn products__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.banners__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 855,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.catalog-page__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.brand-page__slider').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.popular-products__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider__btn slider__btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.banner-slider').slick({
        prevArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--prev"><img src="icons/arrows/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn banner__slider-btn banner__slider-btn--next"><img src="icons/arrows/arrow_right.svg" alt=""></button>'
    });

    $('.product-page__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn product-page__slider-btn product-page__slider-btn--prev"><svg width="10" height="19" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M27.2905 17.0123L10.6671 0.388969C10.1168 -0.142524 9.23985 -0.127264 8.70836 0.42306C8.18985 0.959911 8.18985 1.81097 8.70836 2.34774L24.3524 17.9917L8.70836 33.6357C8.16753 34.1766 8.16753 35.0536 8.70836 35.5945C9.24935 36.1353 10.1262 36.1353 10.6671 35.5945L27.2905 18.9711C27.8313 18.4301 27.8313 17.5533 27.2905 17.0123Z" fill="white" fill-opacity="0.75"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white"/></clipPath></defs></svg></button>',
        nextArrow: '<button class="slider__btn product-page__slider-btn product-page__slider-btn--next"><svg width="10" height="19" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M8.7095 18.9878L25.3329 35.6112C25.8832 36.1426 26.7602 36.1274 27.2916 35.5771C27.8102 35.0402 27.8102 34.1892 27.2916 33.6524L11.6476 18.0084L27.2916 2.36439C27.8325 1.82348 27.8325 0.946533 27.2916 0.405624C26.7507 -0.135204 25.8738 -0.135204 25.3329 0.405624L8.7095 17.029C8.16867 17.57 8.16867 18.4469 8.7095 18.9878Z" fill="white" fill-opacity="0.75"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white" transform="translate(36 36) rotate(-180)"/></clipPath></defs></svg></button>',
        fade: true,
        asNavFor: '.product-page__nav-slider'
      });
      $('.product-page__nav-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider__btn product-page__nav-sliderbtn product-page__nav-sliderbtn--prev"><svg width="10" height="19" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M8.7095 18.9878L25.3329 35.6112C25.8832 36.1426 26.7602 36.1274 27.2916 35.5771C27.8102 35.0402 27.8102 34.1892 27.2916 33.6524L11.6476 18.0084L27.2916 2.36439C27.8325 1.82348 27.8325 0.946533 27.2916 0.405624C26.7507 -0.135204 25.8738 -0.135204 25.3329 0.405624L8.7095 17.029C8.16867 17.57 8.16867 18.4469 8.7095 18.9878Z" fill="white" fill-opacity="0.75"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white" transform="translate(36 36) rotate(-180)"/></clipPath></defs></svg></button>',
        nextArrow: '<button class="slider__btn product-page__nav-sliderbtn product-page__nav-sliderbtn--next"><img src="icons/arrows/arrow_right.svg" alt=""><svg width="10" height="19" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M27.2905 17.0123L10.6671 0.388969C10.1168 -0.142524 9.23985 -0.127264 8.70836 0.42306C8.18985 0.959911 8.18985 1.81097 8.70836 2.34774L24.3524 17.9917L8.70836 33.6357C8.16753 34.1766 8.16753 35.0536 8.70836 35.5945C9.24935 36.1353 10.1262 36.1353 10.6671 35.5945L27.2905 18.9711C27.8313 18.4301 27.8313 17.5533 27.2905 17.0123Z" fill="white" fill-opacity="0.75"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white"/></clipPath></defs></svg></button>',
        asNavFor: '.product-page__slider',
        //centerMode: true,
        focusOnSelect: true
      });

    
    // Tabs
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

    
    // Toggle text
    $('.drop').on('click', function() {
        $(this).toggleClass('drop--active');
        $('.hidden-text').slideToggle('200');
    });


    // Cards (line / grid)
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

    // Modals
    $('.bill-btn').on('click', function() {
        $('.overlay, #bill').fadeIn('slow');
    });
    $('.offer-btn').on('click', function() {
        $('.overlay, #get-offer').fadeIn('slow');
    });
    $('.one-click-btn').on('click', function() {
        $('.overlay, #one-click-buy').fadeIn('slow');
    });
    $('.pre-order__btn').on('click', function() {
        $('.overlay, #pre-order').fadeIn('slow');
    });
    $('.header__callback, .footer__call').on('click', function(){
        $('.overlay, #callback').fadeIn('slow');
    });
    $('.header__feedback, .header__message, .footer__message, .header__contact-descr').on('click', function(){
        $('.overlay, #message-us').fadeIn('slow');
    });
    $('.modal__close, .modal__form-btn--continue-buying').on('click', function() {
        $('.overlay, #callback, #message-us, #location, #city, #price, #pre-order, #get-offer, #bill, #one-click-buy').fadeOut('slow');
    });
    $('.header__city').on('click', function(){
        $('.overlay, #location').fadeIn('slow');
    });
    $('.modal__true-btn').on('click', function(){
        $('.overlay, #location').fadeOut('slow');
    });
    $('.modal__false-btn').on('click', function(){
        $('#location').fadeOut('slow');
        $('#city').fadeIn('slow');
    });
    var city = $('.modal__city input');
    city.on('click', function(){
        $('.overlay, #city').fadeOut('slow');
    });

    // Catalog-list
    $('.header__catalog').on('click', function(){
        $('.header__catalog-dropdown').toggleClass('header__catalog-dropdown--active');
    });
    $('.catalog-dropdown__list-item').on('click', function(){
        $(this).siblings().removeClass('catalog-dropdown__list-item--active');
        $(this).toggleClass('catalog-dropdown__list-item--active');
        $('.catalog-dropdown__second-drop').toggleClass('catalog-dropdown__second-drop--active');
    });

    // Hamburger
    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger--active');
        $('.hamburger__menu').toggleClass('hamburger__menu--active');
        
    });

    /* $('.hamburger__menu-item').each(function(i) {
        $(this).on('click', function() {
            $('.hamburger__sumbenu').addClass('hamburger__submenu--active');
            $('.hamburger__submenu-title').text($('.hamburger__menu-item').eq(i).text());
        });
    }); */
    $('.hamburger__menu-item').on('click', function(){
        $(this).siblings().removeClass('hamburger__menu-item--active');
        $(this).addClass('hamburger__menu-item--active');
        $('.hamburger__submenu').addClass('hamburger__submenu--active');
    });
    $('.hamburger__submenu-title').on('click', function(){
        $(this).parent().removeClass('hamburger__submenu--active');
    });


    // Hover basket (remove product)
    $('.basket__remove-btn').on('click', function(){
        $(this).parent().fadeOut();
    });


    // Form validation
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:  {
                    required: "Пожалуйста, введите свое имя"
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#callback form');
    validateForms('#message-us form');
    validateForms('#bill form');
    validateForms('#one-click-buy form');
    validateForms('#price form');
    validateForms('#pre-order form');
    validateForms('#get-offer form');

    $('form').submit(function(e) {
        e.preventDefault(); // Отключаем перезагрузку страницы просле отправки формы - стандартное поведение браузера.
        $.ajax({
            type: "POST", // Отдаем данные
            url: "smart.php", // куда будет отправляться запрос
            data: $(this).serialize() // Данные, которые отправляются
        }).done(function() {
            $(this).find("input").val(""); // Очищаем инпуты
            $('.overlay, .modal').fadeOut();
            $('form').trigger('reset'); // Все формы должны очиститься
        });
        return false;
    });

    /* $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
        return false;
    }); */

    $('.form-style, .filter-style').styler();


    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
      $input.val(value);
     
    });
    
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value < 10) {
            value = value + 1;
        } else {
            value = 10;
        }
     
        $input.val(value);
    });


    // Dropzone
    var dropZone = $('.dropzone'),
        maxFileSize = 2000000; // максимальный размер файла - 2 мб.

    // Проверяем поддерживаемость браузеров
    if (typeof(window.FileReader) == 'undefined') {
        dropZone.text('Не поддерживается браузером!');
        dropZone.addClass('error');
    }

    // Анимация эффекта перетаскивания файла на dropZone
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };
        
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };

    // «ondrop» — это событие когда перетянутый файл опустили
    dropZone[0].ondrop = function(event) {
        event.preventDefault();
        dropZone.removeClass('hover');
        dropZone.addClass('dropp');
    };

    // проверка на размер файла
    //var file = event.dataTransfer.files[0];
        
    /* if (file.size > maxFileSize) {
        dropZone.text('Файл слишком большой!');
        dropZone.addClass('error');
        return false;
    } */

    // AJAX-звпрос
    /* var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.onreadystatechange = stateChange;
    xhr.open('POST', '/upload.php');
    xhr.setRequestHeader('X-FILE-NAME', file.name);
    xhr.send(file); */

    // функции прогресса загрузки и результата загрузки
    /* function uploadProgress(event) {
        var percent = parseInt(event.loaded / event.total * 100);
        dropZone.text('Загрузка: ' + percent + '%');
    } */

    // проверим завершен ли процесс загрузки и нет ли ошибок
    /* function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.text('Загрузка успешно завершена!');
            } else {
                dropZone.text('Произошла ошибка!');
                dropZone.addClass('error');
            }
        }
    } */
});