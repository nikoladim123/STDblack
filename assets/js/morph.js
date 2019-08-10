var bookAStudio = document.getElementsByClassName('bookAStudio');
var morphboxID = document.getElementById('morphboxID');
var blackOverlayheader = document.getElementsByClassName('blackOverlayheader');
var bannerButtonContainer = document.getElementsByClassName('bannerButtonContainer');

var tick = 1;
bookAStudio[0].addEventListener('click',()=>{
  if (tick) {
    setTimeout(function () {
      tick=0;
    }, 1100);
    morphboxID.className += ' morphPClicked';
    blackOverlayheader[0].style.display = 'block';
    setTimeout(function () {
      blackOverlayheader[0].style.opacity = '0.8';
    }, 100);
    bannerButtonContainer[0].style.opacity = '1'
    morphboxID.style.height = "29vw";
  }
  if(!tick){
    morphboxID.className = ' morphBox';
    blackOverlayheader[0].style.opacity = '0';
    setTimeout(function () {
      blackOverlayheader[0].style.display = 'none';
      tick = 1;
    }, 1100);
    bannerButtonContainer[0].style.opacity = '0'
    morphboxID.style.height = "6vw";
  }
});

blackOverlayheader[0].addEventListener('click',()=>{
  if(!tick){
    morphboxID.className = ' morphBox';
    blackOverlayheader[0].style.opacity = '0';
    setTimeout(function () {
      blackOverlayheader[0].style.display = 'none';
      tick = 1;
    }, 1100);
    bannerButtonContainer[0].style.opacity = '0'
    morphboxID.style.height = "6vw";
  }
});


console.log('hello');
