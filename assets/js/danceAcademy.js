var danceBaner = document.getElementsByClassName('danceBaner');
var uploadBanerFixedContainer = document.getElementsByClassName('uploadBanerFixedContainer');
var cameraBox = document.getElementsByClassName('cameraBox');
var customCamera = document.getElementsByClassName('customCamera');
var cameraInput = document.getElementsByClassName('cameraInput');

// danceBaner[0].addEventListener('mouseenter',()=>{
//   customCamera[0].style.opacity = '0.8';
// });
//
// danceBaner[0].addEventListener('mouseleave',()=>{
//   customCamera[0].style.opacity = '0';
// });
//
// cameraBox[0].addEventListener('mouseenter',()=>{
//   customCamera[0].style.opacity = '1';
// });
//
// cameraBox[0].addEventListener('click',()=>{
//   uploadBanerFixedContainer[0].style.display = 'flex';
// });
//
// uploadBanerFixedContainer[0].addEventListener('click',(e)=>{
//   uploadBanerFixedContainer[0].style.display = 'none';
// })


// thumbnail
var thumbnail = document.getElementsByClassName('thumbnail');
var bannerImg = document.getElementsByClassName('bannerImg');


function thumbnailClick(e) {
  bannerImg[0].style.opacity = 0;
  setTimeout(function () {

    bannerImg[0].src = `assets/images/danceAcadaemy/banerImages/${e.dataset.thumbnail}.jpg`
    bannerImg[0].dataset.newSet = e.dataset.thumbnail;
  }, 300);
  console.log(e.dataset.thumbnail);
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
