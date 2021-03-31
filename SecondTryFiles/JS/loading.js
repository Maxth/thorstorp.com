main = document.querySelector('main');
loading = document.querySelector('#loading');
// greetContainer = document.querySelector('.greet-container');
// introContainer = document.querySelector('.intro-container');



//HÄR BÖRJAR LOADING-SCRIPTET, kräver greetContainer, main och loading
function onReady(callback) {
//   greetContainer.style.display = 'none';
  let intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
    //   greetContainer.style.display = 'block';
    // introContainer.classList.add('intro-container-anim');
    setTimeout(()=> {
        // introContainer.classList.remove('intro-container-anim');
    }, 500)
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}




function setVisible(selector, visible) {
  selector.style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible(main, true);
  setVisible(loading, false);
});

//HÄR SLUTAR LOADING SCRIPTET