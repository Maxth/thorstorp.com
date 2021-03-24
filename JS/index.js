let hi = document.querySelector('.hi');
let comma = document.querySelector('.comma');
let namn = document.querySelector('.namn');
let presentation = document.querySelector('.presentation');
let ul = document.querySelector('main ul');
console.log(ul);

let showInOrder = () => {
    setTimeout(()=> {
        comma.classList.remove('hidden')
    }, 1600)
    setTimeout(()=> {
        namn.classList.remove('hidden')
    }, 3400)
    setTimeout(()=> {
        presentation.classList.remove('hidden')
    }, 5500)
    setTimeout(()=> {
        ul.classList.remove('hidden')
    }, 7000)

}




onload= showInOrder();
    