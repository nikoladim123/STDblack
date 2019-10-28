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
