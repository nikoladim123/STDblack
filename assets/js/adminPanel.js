var spaceManageNavSelection = document.getElementsByClassName('spaceManageNavSelection');

var newlyAddedSpaces = document.getElementsByClassName('newlyAddedSpaces');
var bookedSpacesContainer = document.getElementsByClassName('bookedSpacesContainer');
var allRegisteredSpacesContainer = document.getElementsByClassName('allRegisteredSpacesContainer');

spaceManageNavSelection[0].addEventListener('click',(e)=>{
  spaceManageNavSelection[1].dataset.spaceManageNav = '0';
  spaceManageNavSelection[2].dataset.spaceManageNav = '0';
  e.target.dataset.spaceManageNav = '1';
  newlyAddedSpaces[0].style.display = 'block';
  bookedSpacesContainer[0].style.display = 'none';
  allRegisteredSpacesContainer[0].style.display = 'none';
});

spaceManageNavSelection[1].addEventListener('click',(e)=>{
  spaceManageNavSelection[0].dataset.spaceManageNav = '0';
  spaceManageNavSelection[2].dataset.spaceManageNav = '0';
  e.target.dataset.spaceManageNav = '1';
  newlyAddedSpaces[0].style.display = 'none';
  bookedSpacesContainer[0].style.display = 'block';
  allRegisteredSpacesContainer[0].style.display = 'none';
});

spaceManageNavSelection[2].addEventListener('click',(e)=>{
  spaceManageNavSelection[1].dataset.spaceManageNav = '0';
  spaceManageNavSelection[2].dataset.spaceManageNav = '0';
  e.target.dataset.spaceManageNav = '1';
  newlyAddedSpaces[0].style.display = 'none';
  bookedSpacesContainer[0].style.display = 'none';
  allRegisteredSpacesContainer[0].style.display = 'block';
});
