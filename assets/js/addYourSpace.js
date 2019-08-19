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
