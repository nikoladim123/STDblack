var searchContainerInput = document.getElementsByClassName('searchContainerInput');
var ytSearchMenu = document.getElementsByClassName('ytSearchMenu');
var searchContainer = document.getElementsByClassName('searchContainer');
var searchButton = document.getElementsByClassName('searchButton');


searchContainerInput[0].addEventListener('focus',()=>{
  ytSearchMenu[0].style.maxHeight = '41vw';
});

searchButton[0].addEventListener('focus',()=>{
  ytSearchMenu[0].style.maxHeight = '41vw';
});

searchContainer[0].addEventListener('mouseleave',()=>{
  ytSearchMenu[0].style.maxHeight = '0vw';
});


// popup
var poUpCancelButton = document.getElementsByClassName('poUpCancelButton');
var popUpExitBLackBox = document.getElementsByClassName('popUpExitBLackBox');
var addToPopUp = document.getElementsByClassName('addToPopUp');
var AddTo = document.getElementsByClassName('AddTo');

popUpExitBLackBox[0].addEventListener('click',()=>{
  addToPopUp[0].style.display = 'none';
});

poUpCancelButton[0].addEventListener('click',()=>{
  addToPopUp[0].style.display = 'none';
});

for (var i = 0; i < AddTo.length; i++) {
  AddTo[i].addEventListener('click',()=>{
    addToPopUp[0].style.display = 'flex';
  })
}
