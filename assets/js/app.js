// header section animations and functions and vars
// header section animations and functions and vars
var discoverAbook = document.getElementsByClassName('discoverAbook');
var studiosContainer = document.getElementsByClassName('studiosContainer');

function discoverAbookFun() {
  discoverAbook[0].style.opacity = '1';
  discoverAbook[0].style.filter = 'blur(0px)';
  setTimeout(function () {
    studiosContainer[0].style.width = '50.0725vw';
  }, 800);
}


// featured band (the new boys)
var theNewBoysTextCoontainer = document.getElementsByClassName('theNewBoysTextCoontainer');
var theWayWeAre = document.getElementsByClassName('theWayWeAre');
var featuredBandTextContainer = document.getElementsByClassName('featuredBandTextContainer');
var featuredSection = document.getElementsByClassName('featuredSection');

function theNewBoysTextCoontainerFun() {
  if(theWayWeAre[0].getBoundingClientRect().top < window.innerHeight / 1.5){
    theWayWeAre[0].style.top = '0vw';
    theWayWeAre[1].style.top = '0vw';
  }
}

var timer;
featuredSection[0].addEventListener('mousemove',()=>{
  featuredBandTextContainer[0].style.opacity = '1';
  console.log(123);
  window.clearTimeout(timer);
  endAndStartTimer();
});

function endAndStartTimer() {
  timer = window.setTimeout(function(){
    featuredBandTextContainer[0].style.opacity = '0.1';
    console.log(456);
  },3000);
}

// featuredSectionTwoTextContainer two
var timerTwo;
featuredSection[1].addEventListener('mousemove',()=>{
  featuredBandTextContainer[1].style.opacity = '1';
  console.log(123);
  window.clearTimeout(timerTwo);
  endAndStartTimerTwo();
});

function endAndStartTimerTwo() {
  timerTwo = window.setTimeout(function(){
    featuredBandTextContainer[1].style.opacity = '0.1';
    console.log(456);
  },3000);
}

// carousel
var carouselThree = document.getElementById('carouselThree');
var carThreeLeftArrow = document.getElementById('carThreeLeftArrow');
var carThreeRightArrow = document.getElementById('carThreeRightArrow');
carThreeLeftArrow.addEventListener('click',function(){
  leftArrowThree();
  console.log('do i work?');
});
carThreeRightArrow.addEventListener('click',function(){
  rightArrowThree();
  console.log('do i work?');
});
var moduloThree = 1002;
function leftArrowThree(){
  moduloThree--;
  carMoveThree();
}
function rightArrowThree(){
  moduloThree++;
  carMoveThree();
}
function carMoveThree(){
  if(moduloThree%2 === 0){
    carouselThree.style.left = '0%'
  }
  if(moduloThree%2 === 1){
    carouselThree.style.left = '-50%'
  }
}

// form show hide
// var loginOverlay = document.getElementsByClassName('loginOverlay');
// var closeBoxLogIn = document.getElementsByClassName('loginOverlay');
// var logInButton = document.getElementsByClassName('logInButton');
//
// logInButton[0].addEventListener('click',(e)=>{
//   e.preventDefault();
//   loginOverlay[0].style.display = 'block';
//   setTimeout(function () {
//     loginOverlay[0].style.opacity = '1';
//   }, 100);
// });
//
// closeBoxLogIn[0].addEventListener('click',(e)=>{
//   e.preventDefault();
//   loginOverlay[0].style.opacity = '0';
//   setTimeout(function () {
//     loginOverlay[0].style.display = 'none';
//   }, 500);
// });

// bannerButtonContainerIndex
var bannerButtonContainerIndex = document.getElementsByClassName('bannerButtonContainerIndex');

function bannerButtonContainerFun() {
  bannerButtonContainerIndex[0].style.right = '0vw';
}


// baner area height
var bannerArea = document.getElementsByClassName('bannerArea');
var navArea = document.getElementsByClassName('navArea');

function bannerAreaFun() {
  // bannerArea[0].style.height = '10vw'
  bannerArea[0].style.height = 'calc(100vh - '+ navArea[0].getBoundingClientRect().height +'px)';
}



// window events
window.addEventListener('load',()=>{
  bannerAreaFun();
  discoverAbookFun();
  // bannerButtonContainerFun();
});

window.addEventListener('scroll',()=>{
  theNewBoysTextCoontainerFun();
});

window.addEventListener('resize',()=>{
  bannerAreaFun();
});
