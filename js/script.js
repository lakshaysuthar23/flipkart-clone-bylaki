var slides = document.querySelectorAll('.slide');
var counter = 0;
var direction = 1;

slides.forEach(
    (s, i) => {
        s.style.left = `${i * 100}%`;
    }
)
function toPre() {
    if (counter > 0) {
        counter--

    }
    else {
        direction = 1;
    }
    slideImage()
}
function toNext() {
    if (counter < slides.length - 1) {

        counter++
    }
    else {
        direction = -1;
    }
    slideImage()
}
function slideImage() {
    slides.forEach(
        (s) => {
            s.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

function autoSlide() {
    if (direction === 1) {
        toNext();
    }
    else {
        toPre();
    }
}

setInterval(autoSlide, 3000)

let currentPosition = 0;

function toNext1() {
    const cardContainer = document.querySelector('.card');
    const cardWidth = 300; // Width of one card
    const gap = 20; // Gap between cards
    const totalCards = 10; // Total number of cards
    const visibleCards = 5; // Number of visible cards at a time
    const maxPosition = totalCards - visibleCards; // Maximum slide position

    // Check if the current position has reached the maximum position
    if (currentPosition < maxPosition) {
        currentPosition++;
        cardContainer.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
    } else {
        console.log("Reached the end of the cards");
    }
}

function toPre1() {
    const cardContainer = document.querySelector('.card');
    const cardWidth = 300; // Width of one card
    const gap = 20; // Gap between cards

    // Check if the current position is greater than 0
    if (currentPosition > 0) {
        currentPosition--;
        cardContainer.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
    } else {
        console.log("Reached the beginning of the cards");
    }
}

let currentPosition1 = 0;

function toNext2() {
    const cardContainer1 = document.querySelector('.card-1');
    const cardWidth1 = 300;
    const gap1 = 20;
    const totalCards1 = 10;
    const visibleCards1 = 5;
    const maxPosition1 = totalCards1 - visibleCards1;

    if (currentPosition1 < maxPosition1) {
        currentPosition1++;
        cardContainer1.style.transform = `translateX(-${currentPosition1 * (cardWidth1 + gap1)}px)`
    } else {
        console.log('reached at last')
    }
}
function toPre2() {
    const cardContainer = document.querySelector('.card-1');
    const cardWidth = 300; // Width of one card
    const gap = 20; // Gap between cards

    // Check if the current position is greater than 0
    if (currentPosition1 > 0) {
        currentPosition1--;
        cardContainer.style.transform = `translateX(-${currentPosition1 * (cardWidth + gap)}px)`;
    } else {
        console.log("Reached the beginning of the cards");
    }
}

let currentPosition2 = 0;
function toNext3(){
    const cardContainer = document.querySelector('.card-2');
    const cardWidth = 300;
    const gap = 20;
   const totalCards = 10;
   const visibleCards = 5;
   const maxPosition = totalCards - visibleCards;

   if(currentPosition2 < maxPosition){
    currentPosition2++;
    cardContainer.style.transform = `translateX(-${currentPosition2 * (cardWidth + gap)}px)`;
   }
}

function toPre3() {
    const cardContainer = document.querySelector('.card-2');
    const cardWidth = 300; // Width of one card
    const gap = 20; // Gap between cards

    // Check if the current position is greater than 0
    if (currentPosition2 > 0) {
        currentPosition2--;
        cardContainer.style.transform = `translateX(-${currentPosition2 * (cardWidth + gap)}px)`;
    } else {
        console.log("Reached the beginning of the cards");
    }
}
