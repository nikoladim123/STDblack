// header section animations and functions and vars
var discoverAbook = document.getElementsByClassName('discoverAbook');
var studiosContainer = document.getElementsByClassName('studiosContainer');

function discoverAbookFun() {
  discoverAbook[0].style.opacity = '1';
  discoverAbook[0].style.filter = 'blur(0px)';
  setTimeout(function () {
    studiosContainer[0].style.width = '50.0725vw';
  }, 1000);
}


// featured band (the new boys)
var theNewBoysTextCoontainer = document.getElementsByClassName('theNewBoysTextCoontainer');
var theWayWeAre = document.getElementsByClassName('theWayWeAre');

function theNewBoysTextCoontainerFun() {
  if(theWayWeAre[0].getBoundingClientRect().top < window.innerHeight / 1.5){
    theWayWeAre[0].style.top = '0vw';
    console.log(123);
  }
}


// window events
window.addEventListener('load',()=>{
  discoverAbookFun();
});

window.addEventListener('scroll',()=>{
  theNewBoysTextCoontainerFun();
});
