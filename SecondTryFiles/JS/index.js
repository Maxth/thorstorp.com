linksContainer = document.querySelector('.links-container');
video = document.querySelector('#video');
greetContainer = document.querySelector('.greet-container');
arrow =document.querySelector('.arrow');



document.addEventListener('scroll', (e) => {
let lastKnownScrollPositionVH = (scrollY/document.documentElement.clientHeight)*100;
let lastKnownScrollPosition = scrollY;
console.log(lastKnownScrollPositionVH);
if (scrollY>0) {
    arrow.style.visibility = 'hidden';
} else arrow.style.visibility = 'visible';

greetContainer.style.clipPath = `inset(0 ${lastKnownScrollPositionVH}% 0 ${lastKnownScrollPositionVH}%)`;

})