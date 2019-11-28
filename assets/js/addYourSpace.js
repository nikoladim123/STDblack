
var spacerLeftMenuSelection = document.getElementsByClassName('spacerLeftMenuSelection');
var rightContent = document.getElementsByClassName('rightContent');
var continueButton = document.getElementsByClassName('continueButton');

for (var i = 0; i < spacerLeftMenuSelection.length; i++) {
  spacerLeftMenuSelection[i].addEventListener('click',(e)=>{
    customLoop(e);
  });
}

var customI = 0;
function customLoop(e) {
  if(customI < spacerLeftMenuSelection.length){
    spacerLeftMenuSelection[customI].dataset.selected = 0;
    rightContent[customI].style.display = 'none';
    customI++;
    customLoop(e);
  }else{
    customI = 0;
  };
  e.target.dataset.selected = 1;
  rightContent[e.target.dataset.menusel].style.display = 'block';
}



for (var i = 0; i < continueButton.length; i++) {
  continueButton[i].addEventListener('click',(e)=>{
    continueButtonFun(e);
  })
}

function continueButtonFun(e) {
  for (var i = 0; i < spacerLeftMenuSelection.length; i++) {
    rightContent[i].style.display = 'none';
    spacerLeftMenuSelection[i].dataset.selected = 0;
  }
  rightContent[e.target.dataset.buttonselection].style.display = 'block';
  spacerLeftMenuSelection[e.target.dataset.buttonselection].dataset.selected = 1;
  console.log(e.target.dataset.buttonselection);
}

// mobile

var spacerLeftMenuSelectionMob = document.getElementsByClassName('spacerLeftMenuSelectionMob');
var rightContentMob = document.getElementsByClassName('rightContentMob');
var continueButtonMob = document.getElementsByClassName('continueButtonMob');
var addSpaceRight = document.getElementsByClassName('addSpaceRight');

for (var i = 0; i < spacerLeftMenuSelectionMob.length; i++) {
  spacerLeftMenuSelectionMob[i].addEventListener('click',(e)=>{
    setTimeout(function () {
      addSpaceRight[1].style.order = 2 +  parseInt(e.target.dataset.menusel);
      customLoopMob(e);
    }, 800);
    smothMove();
  });
}


var customI = 0;
function customLoopMob(e) {
  if(customI < spacerLeftMenuSelectionMob.length){
    spacerLeftMenuSelectionMob[customI].dataset.selected = 0;
    rightContentMob[customI].style.display = 'none';
    customI++;
    customLoopMob(e);
  }else{
    customI = 0;
  };
    e.target.dataset.selected = 1;
    rightContentMob[e.target.dataset.menusel].style.display = 'block';
}

spacerLeftMenuSelectionMob[0].style.display = 'flex';



for (var i = 0; i < continueButtonMob.length; i++) {
  continueButtonMob[i].addEventListener('click',(e)=>{
    smothMove()
    setTimeout(function () {
      continueButtonMobFun(e);
    }, 950);
  })
}

function continueButtonMobFun(e) {
  for (var i = 0; i < spacerLeftMenuSelectionMob.length; i++) {
    rightContentMob[i].style.display = 'none';
    spacerLeftMenuSelectionMob[i].dataset.selected = 0;
  }
  addSpaceRight[1].style.order = 2 +  parseInt(e.target.dataset.buttonselection);
  rightContentMob[e.target.dataset.buttonselection].style.display = 'block';
  spacerLeftMenuSelectionMob[e.target.dataset.buttonselection].dataset.selected = 1;

  spacerLeftMenuSelectionMob[e.target.dataset.buttonselection].style.display = 'flex';
  console.log(e.target.dataset.buttonselection);
}


function smothMove() {
  addSpaceRight[1].style.maxHeight = '0vh';
  setTimeout(function () {
    addSpaceRight[1].style.maxHeight = '185vh';
  }, 1200);
}


// popUp close;
var continueNowInPopUp = document.getElementsByClassName('continueNowInPopUp');
var studioSpacesPopup = document.getElementsByClassName('studioSpacesPopup');

continueNowInPopUp[0].addEventListener('click',()=>{
  studioSpacesPopup[0].style.opacity = '0';
  setTimeout(function () {
    studioSpacesPopup[0].style.display = 'none';
  }, 500);
});
