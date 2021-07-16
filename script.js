$('.slider').slick({
    infinite: true,
    prevArrow: "<img src='/images/slider/arrow_prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='/images/slider/arrow_next.png' class='next' alt='2'>",
    adaptiveHeight: false,
    autoplay: true,
});
let counter = true;
document.querySelector(".Next").onclick = function() {
    let pathImg = ['/carBrands/opel.png', '/carBrands/Peugeot.png', '/carBrands/porsche.png', '/carBrands/Reno.png', '/carBrands/seat.png', '/carBrands/skoda.png', '/carBrands/subaru.png', ];
    let element = document.querySelector(".CarBrands");
    if (counter) {
        for (let item in pathImg) {
            var div = document.createElement("div");
            div.setAttribute("class", "car");
            var img = document.createElement("IMG");
            img.setAttribute('src', pathImg[item]);
            div.appendChild(img);
            element.appendChild(div)
        }
        counter = false;
    }
}