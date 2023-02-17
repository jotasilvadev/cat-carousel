const glideCarousel = document.querySelector('.glide')

const config = {
    type: "carousel",
    autoplay: 3000,
    keyboard: true,
    perView: 3,
    gap: 25,
    breakpoints: {
        900: {
            perView: 2,
        },
        600: {
            perView: 1,
        },
    },
};

new Glide(glideCarousel, config).mount()