let hi = document.querySelector('.hi');
let comma = document.querySelector('.comma');
let namn = document.querySelector('.namn');
let presentation = document.querySelector('.presentation');
let ul = document.querySelector('main ul');
console.log(ul);

let showInOrder = () => {
    setTimeout(()=> {
        comma.classList.remove('hidden')
    }, 1650)
    setTimeout(()=> {
        namn.classList.remove('hidden')
    }, 3450)
    setTimeout(()=> {
        presentation.classList.remove('hidden')
    }, 6050)
    setTimeout(()=> {
        ul.classList.remove('hidden')
    }, 7550)

}




onload= showInOrder();
    