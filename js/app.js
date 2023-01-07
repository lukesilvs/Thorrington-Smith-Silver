

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })


    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })




$('.team-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 800,
    items: 3,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
            margin: 8,
        },
}
})
});
