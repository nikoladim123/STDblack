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
    blogPopUpContent[0].scrollTop = 0;
    blogPopUpContainer[0].style.top = '0';
    blogPopUpContainer[0].style.opacity = '1';
  });
};

blogPopUpContent[0].addEventListener('click',(e)=>{
  e.stopPropagation()
});

blogPopUpContent[0].addEventListener('scroll',(e)=>{
    if (Math.floor(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight){
        console.log('scrolled');
        blogPopUpContainer[0].style.top = '-100%';
        blogPopUpContent[0].scrollTop = 0;
    }
    // console.log(e.target.scrollHeight - e.target.scrollTop);
    // console.log(e.target.clientHeight);
})

blogPopUpContainer[0].addEventListener('click',(e)=>{
  blogPopUpContainer[0].style.top = '-100%';
  blogPopUpContainer[0].style.opacity = '0';
});

popUpCloseButton[0].addEventListener('click',()=>{
  blogPopUpContainer[0].style.top = '-100%';
  blogPopUpContainer[0].style.opacity = '0';
});



// body double hover
var body = document.getElementsByClassName('body');
var recentPostsDiv = document.getElementsByClassName('recentPostsDiv');
body[0].style.background = 'rgb(249,242,242)';
recentPostsDiv[0].style.background = 'rgb(249,242,242)';



// instagram double hover
var instaSection = document.getElementsByClassName('instaSection');
function instaSectionFun() {
  if(instaSection[0].getClientRects()[0].top < window.innerHeight /3){
    instaSection[0].style.background = 'transparent';
  }else{
    instaSection[0].style.background = 'black';
    console.log(123);
  }
}


// instagrid images anim
var instaGridImages = document.getElementsByClassName('instaGridImages');


function instaGridImagesFun(e) {
  if(e.getClientRects()[0].top < window.innerHeight /1.8){
    e.style.opacity = '1';
    e.style.top = '0';
  }else{
    e.style.opacity = '0';
    e.style.top = '2vw';
  }
}
function instaGridCall() {
  instaGridImagesFun(instaGridImages[0])
  instaGridImagesFun(instaGridImages[1])
  instaGridImagesFun(instaGridImages[2])
  instaGridImagesFun(instaGridImages[3])
  instaGridImagesFun(instaGridImages[4])
  instaGridImagesFun(instaGridImages[5])
}



// post images anim
var postImage = document.getElementsByClassName('postImage');
function postImageFun(e) {
  if(e.getClientRects()[0].top < window.innerHeight /1.8){
    e.style.opacity = '1';
    e.style.left = '0';
  }else{
    e.style.opacity = '0';
    e.style.left = '-2vw';
  }
}

function postImageCall() {
  postImageFun(postImage[0]);
  postImageFun(postImage[1]);
  postImageFun(postImage[2]);
  postImageFun(postImage[3]);
  postImageFun(postImage[4]);
}



// rightSideImageAnimClass images anim
var rightSideImageAnimClass = document.getElementsByClassName('rightSideImageAnimClass');
function rightSideImageAnimClassFun(e) {
  if(e.getClientRects()[0].top < window.innerHeight /1.8){
    e.style.opacity = '1';
    e.style.right = '0';
  }else{
    e.style.opacity = '0';
    e.style.right = '-2vw';
  }
}

function rightSideImageAnimClassCall() {
  rightSideImageAnimClassFun(rightSideImageAnimClass[0]);
  rightSideImageAnimClassFun(rightSideImageAnimClass[1]);
  rightSideImageAnimClassFun(rightSideImageAnimClass[2]);
  rightSideImageAnimClassFun(rightSideImageAnimClass[3]);
  rightSideImageAnimClassFun(rightSideImageAnimClass[4]);
}



// window events
// window events
// window events
window.addEventListener('scroll',()=>{
  // instaSectionFun(); //insta double hover
  instaGridCall();
  postImageCall();
  rightSideImageAnimClassCall();
});
window.addEventListener('load',()=>{

});
