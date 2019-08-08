var morphboxID = document.getElementById('morphboxID');
var blackOverlayheader = document.getElementsByClassName('blackOverlayheader');

morphboxID.addEventListener('click',()=>{
  morphboxID.className += ' morphPClicked';
  setTimeout(function () {
    morphboxID.style.overflow = "visible";
  }, 1000);
  blackOverlayheader[0].style.display = 'block';
  blackOverlayheader[0].style.opacity = '0.75';
});

blackOverlayheader[0].addEventListener('click',()=>{
  morphboxID.className = ' morphBox';
  morphboxID.style.overflow = "hidden";
  blackOverlayheader[0].style.opacity = '0';
  setTimeout(function () {
    blackOverlayheader[0].style.display = 'none';
  }, 1000);
});

console.log('hello');
