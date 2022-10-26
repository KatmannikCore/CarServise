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
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        autoplay: true,
    });
})

function openModalContacts(){
    document.querySelector('.modal').hidden = false;
    document.querySelector('.bacround').hidden = false;
}
document.querySelector('.close').addEventListener('click', fiddenModal)
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.modal').hidden = true;
    document.querySelector('.bacround').hidden = true;
}
document.querySelectorAll('.nav a').forEach(item => item.addEventListener('click', () => document.querySelector('.nav').classList.toggle('open_menu')))
document.querySelector('.toggle_menu').addEventListener('click', ()=>{
    document.querySelector('.nav').classList.toggle('open_menu')
    document.querySelectorAll('.nav > ul > li ').forEach(item => item.classList.toggle('open_li'))
})
document.querySelectorAll(".col").forEach(element => element.addEventListener('click', function(e){
   
    if(e.currentTarget.querySelector('p.service_index').textContent ==1){
        document.location.href="/module/service/fitting/fitting.htm";
    }else{
        localStorage.setItem('service_index', e.currentTarget.querySelector('p.service_index').textContent);
        document.location.href="/module/service/service.html";
    }
   


}) );