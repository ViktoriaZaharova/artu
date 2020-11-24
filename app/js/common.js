// slick active
$(window).on('load resize', function() {
    var checkWidth = $(window).width();
    if ((checkWidth > 735) && (checkWidth < 861))  {
        $('.home-menu:not(.slick-initialized)').slick({
            dots: false,
            // infinite: false,
            speed: 100,
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
            // infinite: false,
            speed: 100,
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

    // if (checkWidth < 700) {
    //     $(".home-menu.slick-initialized").slick("unslick");
    // }


});
// slick active