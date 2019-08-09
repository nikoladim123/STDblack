var morphboxID = document.getElementById('morphboxID');
var blackOverlayheader = document.getElementsByClassName('blackOverlayheader');
var bannerButtonContainer = document.getElementsByClassName('bannerButtonContainer');

morphboxID.addEventListener('click',()=>{
  morphboxID.className += ' morphPClicked';
  blackOverlayheader[0].style.display = 'block';
  blackOverlayheader[0].style.opacity = '0.35';
  bannerButtonContainer[0].style.opacity = '1'
  morphboxID.style.height = "29vw";
});

blackOverlayheader[0].addEventListener('click',()=>{
  morphboxID.className = ' morphBox';
  blackOverlayheader[0].style.opacity = '0';
  setTimeout(function () {
    blackOverlayheader[0].style.display = 'none';
  }, 1000);
  bannerButtonContainer[0].style.opacity = '0'
  morphboxID.style.height = "6vw";
});

console.log('hello');
