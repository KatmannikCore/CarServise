import {CreateMenu} from "./js/headerMenu.js";
let urlLogo = '/images/header/logoDemo.png';
document.querySelector('header').append(CreateMenu(urlLogo));

$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 6,
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
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
})
document.querySelectorAll(".col").forEach(element => element.addEventListener('click', function(e){
    localStorage.setItem('service_index', e.currentTarget.querySelector('p.service_index').textContent);
    document.location.href="/module/service/service.html";
}) );