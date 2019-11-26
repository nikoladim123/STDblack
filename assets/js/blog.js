var sixImageDiv = document.getElementsByClassName('sixImageDiv');
var sixImageBlackDivInside = document.getElementsByClassName('sixImageBlackDivInside');
var instaBG = document.getElementsByClassName('instaBG');

// six image flexbox
// six image flexbox
// six image flexbox
for (var i = 0; i < sixImageDiv.length; i++) {
  sixImageDiv[i].addEventListener('mouseenter',(e)=>{
    e.target.childNodes[3].style.left = '0vw';
    e.target.childNodes[3].style.bottom = '0vw';
    setTimeout(function () {
      e.target.childNodes[3].style.opacity = '1';
    }, 100);
  });
  sixImageDiv[i].addEventListener('mouseleave',(e)=>{
    e.target.childNodes[3].style.left = '-15.793vw';
    e.target.childNodes[3].style.bottom = '-13.653vw';
    e.target.childNodes[3].style.opacity = '0';
  })
};

// Read more popup
var blogPopUpContainer = document.getElementsByClassName('blogPopUpContainer');
var popUpButton = document.getElementsByClassName('popUpButton');
var popUpCloseButton = document.getElementsByClassName('popUpCloseButton');
var blogPopUpContent = document.getElementsByClassName('blogPopUpContent');


for (var i = 0; i < popUpButton.length; i++) {
  popUpButton[i].addEventListener('click',()=>{
    blogPopUpContainer[0].style.display = 'block';
  });
};

blogPopUpContent[0].addEventListener('click',(e)=>{
  e.stopPropagation()
});

blogPopUpContainer[0].addEventListener('click',(e)=>{
  e.stopPropagation();
  blogPopUpContainer[0].style.display = 'none';
});

popUpCloseButton[0].addEventListener('click',()=>{
  blogPopUpContainer[0].style.display = 'none';
});

// blogPopUpContent[0].addEventListener('click',(e)=>{
//   e.stopPropagation();
// });
