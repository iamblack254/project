
// JavaScript code can be added here
document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel(newIndex) {
        items[currentIndex].classList.remove('active');
        items[currentIndex].classList.remove('flipping');
        currentIndex = newIndex;
        items[currentIndex].classList.add('flipping');
        items[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        let newIndex = (currentIndex + 1) % items.length;
        updateCarousel(newIndex);
    });

    prevButton.addEventListener('click', () => {
        let newIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(newIndex);
    });

    items.forEach(item => {
        item.addEventListener('animationend', () => {
            item.classList.remove('flipping');
        });
    });
});
