var danceBaner = document.getElementsByClassName('danceBaner');
var uploadBanerFixedContainer = document.getElementsByClassName('uploadBanerFixedContainer');
var cameraBox = document.getElementsByClassName('cameraBox');
var customCamera = document.getElementsByClassName('customCamera');
var cameraInput = document.getElementsByClassName('cameraInput');

danceBaner[0].addEventListener('mouseenter',()=>{
  customCamera[0].style.opacity = '0.8';
});

danceBaner[0].addEventListener('mouseleave',()=>{
  customCamera[0].style.opacity = '0';
});

cameraBox[0].addEventListener('mouseenter',()=>{
  customCamera[0].style.opacity = '1';
});

cameraBox[0].addEventListener('click',()=>{
  uploadBanerFixedContainer[0].style.display = 'flex';
});

uploadBanerFixedContainer[0].addEventListener('click',(e)=>{
  uploadBanerFixedContainer[0].style.display = 'none';
})


// thumbnail
var thumbnail = document.getElementsByClassName('thumbnail');
var bannerImg = document.getElementsByClassName('bannerImg');


function thumbnailClick(e) {
  banerPopUp[0].style.display = 'flex';
  banerPopUp[0].style.opacity = '1';
  bannerImg[0].style.opacity = 0;
  setTimeout(function () {
    bannerImg[0].src = `assets/images/danceAcadaemy/banerImages/${e.dataset.thumbnail}.jpg`
    bannerImg[0].dataset.newSet = e.dataset.thumbnail;
  }, 300);
}

bannerImg[0].addEventListener('load',(e)=>{
    bannerImg[0].style.opacity = '1';
})

for (var i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener('click',(e)=>{
    thumbnailClick(e.target);
  })
}

// bannerImg
bannerImg[0].addEventListener('click',(e)=>{
  e.stopPropagation();
  bannerImg[0].style.opacity = 0;
  setTimeout(function () {
    if (parseInt(e.target.dataset.newSet) <= 4) {
      bannerImg[0].src = `assets/images/danceAcadaemy/banerImages/${parseInt(e.target.dataset.newSet)+1}.jpg`;
      bannerImg[0].dataset.newSet = parseInt(e.target.dataset.newSet)+1;
    }else{
      bannerImg[0].src = `assets/images/danceAcadaemy/banerImages/1.jpg`;
      bannerImg[0].dataset.newSet = 1;
    }
  }, 300);
})


// popup
var banerPopUp = document.getElementsByClassName('banerPopUp');
var popUpCloseBox = document.getElementsByClassName('popUpCloseBox');

banerPopUp[0].addEventListener('click',(e)=>{
  banerPopUp[0].style.opacity = '0';
  setTimeout(function () {
    banerPopUp[0].style.display = 'none';
  }, 500);
});

popUpCloseBox[0].addEventListener('click',(e)=>{
  banerPopUp[0].style.opacity = '0';
  setTimeout(function () {
    banerPopUp[0].style.display = 'none';
  }, 500);
});

// input file baner
var danceBanerConatainer = document.getElementsByClassName('danceBanerConatainer');

cameraInput[0].addEventListener('input',(e)=>{
  danceBaner[0].src = `assets/images/danceAcadaemy/banerImages/${e.target.files[0].name}`
  console.log(e.target.files[0].name);
})

// drag

dragElement(document.getElementsByClassName("danceBaner")[0]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log(elmnt.offsetTop - pos2);
    if (elmnt.offsetTop - pos2 < 0) {
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      console.log('i hit the top')
    }
    // console.log(elmnt.offsetTop - pos2 < -(danceBaner[0].offsetHeight - danceBanerConatainer[0].clientHeight));
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
