$(document).ready(function (e) {

    let buttons = $('.filterOption button');

    $(buttons).on('click', function (e) {
        let miss = 0;
        $(this).toggleClass('active');
        let filterCount = $(buttons).length;
        $(buttons).each(function (key, val) {
            if (!$(val).hasClass('active')) {
                miss++;
                $('.ssl[data-option="' + $(this).attr('data-filter') + '"]').hide();
            } else {
                $('.ssl[data-option="' + $(this).attr('data-filter') + '"]').show();
            }
        });
        if (miss === filterCount) {
            $('.ssl').show();
        }
    });

    /*    $(document).on('scroll', function () {
            console.log($(this).scrollTop());
            if ($(this).scrollTop() >= 212) {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }).trigger();*/

    $('.profile > a').on('click', function (e) {
        if ($(window).width() < 991) {
            e.preventDefault();
            $('ul.submenu').toggleClass('visible')
        }
    });

    //footer function
    let windowHeight = $(window).height(),
        footerHeight = $('footer').innerHeight(),
        documentHeight = $(document).height();

    $(window).resize(function () {
        if ((documentHeight - windowHeight) > footerHeight) {
            $('footer').css({
                'top': documentHeight - footerHeight + 'px',
                'opacity': 1
            })
        } else {
            $('footer').css({
                'top': windowHeight - footerHeight + 'px',
                'opacity': 1
            })
        }
    }).trigger('resize');


});//ready