var thumbnailImg = document.getElementsByClassName('thumbnailImg');
var popUpImageContainer = document.getElementsByClassName('popUpImageContainer');
var popUpImgCloseBox = document.getElementsByClassName('popUpImgCloseBox');
var popUpVideoContainer = document.getElementsByClassName('popUpVideoContainer');

// popUpImgCloseBox[0].addEventListener('click',()=>{
//   popUpImageContainer[0].style.display = 'none';
// });

for (var i = 0; i < popUpImgCloseBox.length; i++) {
  popUpImgCloseBox[i].addEventListener('click',()=>{
    if(typeof popUpImageContainer[0] !== 'undefined'){
      popUpImageContainer[0].style.display = 'none';
    }
    if(typeof popUpVideoContainer[0] !== 'undefined'){
      popUpVideoContainer[0].style.display = 'none';
    }

  });
}

function imagePopUp() {
  popUpImageContainer[0].style.display = 'flex';
}

function uploadVidPopUp() {
  popUpVideoContainer[0].style.display = 'flex';
}

// for (var i = 0; i < thumbnailImg.length; i++) {
//   thumbnailImg[i].addEventListener("click",(e)=>{
//     popUpImageContainer[0].style.display = 'flex';
//   })
// }

console.log(213);
