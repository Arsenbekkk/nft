const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 1,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});