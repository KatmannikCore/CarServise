$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})




$(document).ready(function() {
    $('.sliderReviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true
    });
})