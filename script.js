let carouselIndices = {
    carousel1: 0,
    carousel2: 0,
};

function showSlide(carouselId, index) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
    if (index >= slides.length) {
        carouselIndices[carouselId] = 0;
    } else if (index < 0) {
        carouselIndices[carouselId] = slides.length - 1;
    } else {
        carouselIndices[carouselId] = index;
    }
    const offset = -carouselIndices[carouselId] * 100;
    document.querySelector(`#${carouselId} .carousel-inner`).style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
    showSlide(carouselId, carouselIndices[carouselId] + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, carouselIndices[carouselId] - 1);
}
