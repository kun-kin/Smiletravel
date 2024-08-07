$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header-wrapper').addClass('fixed');
    } else {
        $('.header-wrapper').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".popup-search").length ===
    //         0) {
    //         $('.popup-search').hide();
    //     }
    // });



    $(".off-main .has-children .button-toggle-menu").click(function() {
        $(this).parent('.has-children').toggleClass('active');
    });

    $(".mobile-toggle").click(function() {
        $('.mobile-menu').addClass('show');
    });
    $(".close-mobile-menu").click(function() {
        $('.mobile-menu').removeClass('show');
    });
    $(".header-search-dropdown").click(function() {
        $(this).toggleClass('current-dropdown');
    });
    $(document).mouseup(function(e) {
        if ($(e.target).closest(".header-search .nav-dropdown").length ===
            0) {
            $('.header-search-dropdown').removeClass('current-dropdown');
        }
    });


    $(".accordion .accordion-item .accordion-item-title").click(function() {
        $(this).toggleClass('active');
        $(this).parent('.accordion-item').children('.accordion-item-content').slideToggle();
    });

});
$(document).on("click", ".change-number .btn-click", function() {
    var qty = $(this).parents(".change-number").find(".number");
    var val = parseInt(qty.text());
    if (Number.isNaN(val)) {
        val = 0;
    }
    if ($(this).hasClass("plus")) {
        qty.text(parseInt(val + 1));
    } else {
        if (val >= 1) {
            qty.text(parseInt(val - 1));
        }
    }
});
$('.change-number .plus').click(function() {
    adult = parseInt($("#adult").text());
    children = parseInt($("#children").text());

    baby = parseInt($("#baby").text());

    if (adult + children + baby + 1 > parseInt('10')) {
        alert("Số khách tối đa: 10");
        event.preventDefault();
        return false;
    }
});

$('.change-number .minus').click(function() {
    adult = parseInt($("#adult").text());
    children = parseInt($("#children").text());

    baby = parseInt($("#baby").text());

    if (adult + children + baby - 1 <= 0) {
        alert("Số khách yêu cầu tối thiểu 1");
        event.preventDefault();
        return false;
    }

});
$(".hasDatepicker").flatpickr({ minDate: 0, dateFormat: 'd/m/Y' });
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
});
$('.brand-slider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,

        },
        600: {
            items: 3,

        },
        1000: {
            items: 5,

        }
    }
});
$('.news-slider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
});
$('.partner-slider').owlCarousel({
    loop: true,
    // margin: 20,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2.5,
            center: true
        },
        600: {
            items: 3.7,
            center: true
        },
        1000: {
            items: 5,
        }
    }
});