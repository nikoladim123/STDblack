// loading video functions
var loadingVid = document.getElementsByClassName('loadingVid');
var videoForLoad = document.getElementsByClassName('videoForLoad');
var theStu = document.getElementsByClassName('theStu');
var talent = document.getElementsByClassName('talent');




// videoForLoad[0].onloadeddata = function() {
//   theStu[0].style.fontSize = '2.5vw';
//     setTimeout(function () {
//       theStu[0].style.filter = 'blur(50px)';
//     }, 1500);
//     setTimeout(function () {
//       loadingVid[0].style.opacity = '0';
//       setTimeout(function () {
//         loadingVid[0].style.display = 'none';
//       }, 1000);
//     }, 3000);
// }


function videoLoadFun() {
  theStu[0].style.fontSize = '7vw';
  talent[0].style.filter = 'blur(0px)';
    setTimeout(function () {
      loadingVid[0].style.opacity = '0';
      setTimeout(function () {
        loadingVid[0].style.display = 'none';
      }, 3500);
    }, 3000);
}


videoForLoad[0].addEventListener("playing", function() {
    console.log("[Playing] loading of video");
    if ( videoForLoad[0].readyState == 4 ) {
        console.log("[Finished] loading of video");
        videoLoadFun();
    }
});

videoForLoad[0].addEventListener("suspend", function(e) {
    console.log("[Suspended] loading of video");
    if ( videoForLoad[0].readyState == 4 ) {
        console.log("[Finished] loading of video");
        videoLoadFun();
    }
});

setTimeout(function () {
  videoLoadFun();
}, 7000);




// videoForLoad[0].addEventListener("loadeddata", function () {
//   theStu[0].style.fontSize = '2.5vw';
//     setTimeout(function () {
//       theStu[0].style.filter = 'blur(50px)';
//     }, 1500);
//     setTimeout(function () {
//       loadingVid[0].style.opacity = '0';
//       setTimeout(function () {
//         loadingVid[0].style.display = 'none';
//       }, 1000);
//     }, 3000);
// });
