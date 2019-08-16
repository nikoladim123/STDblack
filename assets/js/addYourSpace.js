var spacerLeftMenuSelection = document.getElementsByClassName('spacerLeftMenuSelection');
var rightContent = document.getElementsByClassName('rightContent');

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
