var spacerLeftMenuSelection = document.getElementsByClassName('spacerLeftMenuSelection');

for (var i = 0; i < spacerLeftMenuSelection.length; i++) {
  spacerLeftMenuSelection[i].addEventListener('click',(e)=>{
    customLoop(e);
  });
}

var customI = 0;
function customLoop(e) {
  if(customI < spacerLeftMenuSelection.length){
    spacerLeftMenuSelection[customI].dataset.selected = 0;
    customI++;
    customLoop(e);
  }else{
    customI = 0;
  };
  e.target.dataset.selected = 1;
}
