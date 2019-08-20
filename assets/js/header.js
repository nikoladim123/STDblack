var userDropDownArrow = document.getElementsByClassName('userDropDownArrow');
var userDropDownBox = document.getElementsByClassName('userDropDownBox');

userDropDownArrow[0].addEventListener('click',()=>{
  userDropDownBox[0].style.maxHeight = '30vw';
  userDropDownBox[0].style.border = '2px solid white';
});

userDropDownBox[0].addEventListener('mouseleave',()=>{
  userDropDownBox[0].style.maxHeight = '0vw';
  userDropDownBox[0].style.border = '0px solid white';
})
