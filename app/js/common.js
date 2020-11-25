// slick active
$(window).on('load resize', function() {
    var checkWidth = $(window).width();
    if ((checkWidth > 735) && (checkWidth < 861))  {
        $('.home-menu:not(.slick-initialized)').slick({
            dots: false,
            // infinite: false,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M0.999999 1L7 7L1 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M7 13L1 7L7 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>'
        });
    }
    else if ((checkWidth < 650) && (checkWidth > 0)) {
        $('.home-menu:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M0.999999 1L7 7L1 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M7 13L1 7L7 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>'
        });
    }
    else {
        $(".home-menu.slick-initialized").slick("unslick");
    }

    if (checkWidth < 861)  {
        $('.tabs__caption:not(.slick-initialized)').slick({
            dots: false,
            // infinite: false,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            focusOnSelect: true,
            arrows: true,
            asNavFor: '.tab_container',
            nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M0.999999 1L7 7L1 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M7 13L1 7L7 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n</button>'
        });

        $('.tab_container:not(.slick-initialized)').slick({
            dots: false,
            // infinite: false,
            slidesToShow: 1,
            arrows: false,
            fade: true
        });
    }
    else {
        $(".tabs__caption.slick-initialized").slick("unslick");
    }
});
// slick active

$('.main-home__slider').slick({
    slidesToShow: 1,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M0.999999 1L7 7L1 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M7 13L1 7L7 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    fade: true
});

$('.product-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-previews'
});

$('.product-slider-previews').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.product-slider',
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M0.999999 1L7 7L1 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M7 13L1 7L7 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>'
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

$('ul.tabs__caption').on('click', 'li:not(.slick-active)', function () {
    $(this)
        .addClass('slick-active').siblings().removeClass('slick-active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    $(".product-slider").slick('reinit');
    $(".product-slider-previews").slick('reinit');
});


$('.review-view').click(function (e) {
    e.preventDefault();
    $('.reviews-preview').fadeOut();
    $('.reviews-hidden').fadeIn();
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

if ($(".main-home__content .box-text").length){
    $(".main-home__content .box-text").clone().appendTo('.main-home__info');
}
if ($(".main-home__content .main-logo").length){
    $(".main-home__content .main-logo").clone().appendTo('.main-home__info');
}

