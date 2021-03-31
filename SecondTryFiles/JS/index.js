linksContainer = document.querySelector('.links-container');
video = document.querySelector('#video');
greetContainer = document.querySelector('.greet-container');
arrow =document.querySelector('.arrow');




document.addEventListener('scroll', (e) => {
let lastKnownScrollPositionVH = (scrollY/document.documentElement.clientHeight)*100;
let lastKnownScrollPosition = scrollY;
// console.log(lastKnownScrollPositionVH);
if (lastKnownScrollPositionVH<50) {
    arrow.style.visibility = 'visible';
} else arrow.style.visibility = 'hidden';

greetContainer.style.clipPath = `inset(${lastKnownScrollPositionVH}% 0 ${lastKnownScrollPositionVH}% 0)`;

})