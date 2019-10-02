var userDropDownArrow = document.getElementsByClassName('userDropDownArrow');
var userDropDownBox = document.getElementsByClassName('userDropDownBox');

userDropDownArrow[0].addEventListener('click',()=>{
  userDropDownBox[0].style.maxHeight = '35vw';
  userDropDownBox[0].style.border = '2px solid white';
});

userDropDownArrow[1].addEventListener('click',()=>{
  userDropDownBox[0].style.maxHeight = '35vw';
  userDropDownBox[0].style.border = '2px solid white';
});

userDropDownBox[0].addEventListener('mouseleave',()=>{
  userDropDownBox[0].style.maxHeight = '0vw';
  userDropDownBox[0].style.border = '0px solid white';
});


var logIn = document.getElementsByClassName('logIn');
var loginOverlay = document.getElementsByClassName('loginOverlay');
var closeBoxLogIn = document.getElementsByClassName('closeBoxLogIn');

if(typeof logIn[0] !== 'undefined'){
  logIn[0].addEventListener('click',(e)=>{
    e.preventDefault();
    loginOverlay[0].style.display = 'block';
    setTimeout(function () {
      loginOverlay[0].style.opacity = '1';
    }, 50);
  });
}


closeBoxLogIn[0].addEventListener('click',()=>{
  loginOverlay[0].style.display = 'none';
  loginOverlay[0].style.opacity = '0';
})

// register
var register = document.getElementsByClassName('register');
var registerOverlay = document.getElementsByClassName('registerOverlay');
var registerOverlayCloseButton = document.getElementsByClassName('registerOverlayCloseButton');

if(typeof register[0] !== 'undefined'){
  register[0].addEventListener('click',(e)=>{
    e.preventDefault();
    registerOverlay[0].style.display = 'flex';
    setTimeout(function () {
      registerOverlay[0].style.opacity = '1';
    }, 50);
  });
}

registerOverlayCloseButton[0].addEventListener('click',()=>{
  registerOverlay[0].style.display = 'none';
  registerOverlay[0].style.opacity = '0';
  console.log(213);
})
