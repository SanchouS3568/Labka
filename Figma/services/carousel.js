const wrapper = document.querySelector('.cards-wrapper');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let position = 0;
const cardWidth = 210; 
const visibleCards = 3; 
const totalCards = document.querySelectorAll('.card').length;
const maxPosition = totalCards - visibleCards;

nextBtn.addEventListener('click', () => {
    if (position < maxPosition) {
        position++;
        wrapper.style.transform = `translateX(-${position * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (position > 0) {
        position--;
        wrapper.style.transform = `translateX(-${position * cardWidth}px)`;
    }
});