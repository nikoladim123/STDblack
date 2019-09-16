var userDropDownArrow = document.getElementsByClassName('userDropDownArrow');
var userDropDownBox = document.getElementsByClassName('userDropDownBox');

userDropDownArrow[0].addEventListener('click',()=>{
  userDropDownBox[0].style.maxHeight = '35vw';
  userDropDownBox[0].style.border = '2px solid white';
});

userDropDownBox[0].addEventListener('mouseleave',()=>{
  userDropDownBox[0].style.maxHeight = '0vw';
  userDropDownBox[0].style.border = '0px solid white';
});


var register = document.getElementsByClassName('register');
var loginOverlay = document.getElementsByClassName('loginOverlay');
var closeBoxLogIn = document.getElementsByClassName('closeBoxLogIn');

register[0].addEventListener('click',(e)=>{
  e.preventDefault();
  loginOverlay[0].style.display = 'block';
  setTimeout(function () {
    loginOverlay[0].style.opacity = '1';
  }, 50);
});

closeBoxLogIn[0].addEventListener('click',()=>{
  loginOverlay[0].style.display = 'none';
  loginOverlay[0].style.opacity = '0';
})
