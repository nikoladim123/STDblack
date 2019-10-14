var closeBox = document.getElementsByClassName('closeBox');
var newMessagePopUpContainer = document.getElementsByClassName('newMessagePopUpContainer');
var composeNewMessageButton = document.getElementsByClassName('composeNewMessageButton');

// open poup message windwo
composeNewMessageButton[0].addEventListener('click',()=>{
  openPopUpFun();
});


function openPopUpFun() {
  newMessagePopUpContainer[0].style.display = 'block';
  setTimeout(function () {
    newMessagePopUpContainer[0].style.opacity = '1';
  }, 100);
}

// close popup message windwo
closeBox[0].addEventListener('click',()=>{
  closePopUpFun();
});

var closePopupTimeOut;
function closePopUpFun() {
  newMessagePopUpContainer[0].style.opacity = '0';
  openPopupTimeOut = setTimeout(function(){
    newMessagePopUpContainer[0].style.display = 'none';
  }, 500);
}
