var searchContainerInput = document.getElementsByClassName('searchContainerInput');
var ytSearchMenu = document.getElementsByClassName('ytSearchMenu');

searchContainerInput[0].addEventListener('focus',()=>{
  ytSearchMenu[0].style.maxHeight = '41vw';
});

searchContainerInput[0].addEventListener('focusout',()=>{
  ytSearchMenu[0].style.maxHeight = '0vw';
});


// popup
var popUpExitBLackBox = document.getElementsByClassName('popUpExitBLackBox');
var addToPopUp = document.getElementsByClassName('addToPopUp');
var AddTo = document.getElementsByClassName('AddTo');

popUpExitBLackBox[0].addEventListener('click',()=>{
  addToPopUp[0].style.display = 'none';
});

for (var i = 0; i < AddTo.length; i++) {
  AddTo[i].addEventListener('click',()=>{
    addToPopUp[0].style.display = 'flex';
  })
}
