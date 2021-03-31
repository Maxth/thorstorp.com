dropdown = document.querySelector('.dropdown');
eduDropdown = document.querySelector('.edu-dropdown');
downArrow = document.querySelector('.dropdown-arrow');
upArrow = document.querySelector('.up-arrow');

console.log(eduDropdown);




upArrow.classList.add('display-none');
downArrow.classList.add('arrow-down-anim');
//  eduDropdown.classList.add('height');

dropdown.addEventListener('click', () => {
    
    eduDropdown.classList.toggle('edu-down-anim');
     eduDropdown.classList.toggle('height');
   
   downArrow.classList.toggle('display-none');
    upArrow.classList.toggle('display-none');
downArrow.classList.toggle('arrow-down-anim');
})
