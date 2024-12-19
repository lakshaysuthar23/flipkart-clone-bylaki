var slides = document.querySelectorAll('.slide');
var counter = 0;
var direction = 1;

slides.forEach(
    (s, i)=>{
        s.style.left = `${i * 100}%`;
    }
)
function toPre(){
    if(counter > 0){
        counter--

    }
    else{
        direction = 1;
    }
     slideImage()
}
function toNext(){
    if(counter < slides.length -1){

        counter++
    }
    else{
        direction = -1;
    }
    slideImage()
}
function slideImage(){
    slides.forEach(
        (s)=>{
           s.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

function autoSlide(){
    if( direction === 1){
        toNext();
    }
    else{
        toPre();
    }
}

setInterval(autoSlide, 3000)

let currentPosition = 0;

function toNext1() {
    const cardContainer = document.querySelector('.card');
    const cardWidth = document.querySelector('.card1').offsetWidth;
    const gap = 20; // Gap between cards
    const containerWidth = cardContainer.parentElement.offsetWidth;
    const totalCards = document.querySelectorAll('.card1').length;
    
    const maxPosition = totalCards - Math.floor(containerWidth / (cardWidth + gap));

    if (currentPosition < maxPosition) {
        currentPosition++;
        cardContainer.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
    }
}


