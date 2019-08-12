var dateOverlay = document.getElementsByClassName('dateOverlay');
var checkAvailability = document.getElementsByClassName('checkAvailability');
var closeDateBox = document.getElementsByClassName('closeDateBox');

for (var i = 0; i < checkAvailability.length; i++) {
  checkAvailability[i].addEventListener('click',()=>{
    openDateMenuFun();
  });
};

closeDateBox[0].addEventListener('click',()=>{
  if(dateMenuSwitch === 1){
    dateOverlay[0].style.opacity = '0';
    setTimeout(function () {
      setTimeout(function () {
        dateOverlay[0].style.display = 'none';
        dateMenuSwitch=0;
      }, 1000);
    }, 100);
  }
});


var dateMenuSwitch = 0;
function openDateMenuFun() {
  if(dateMenuSwitch === 0){
    dateOverlay[0].style.display = 'block';
    setTimeout(function () {
      dateOverlay[0].style.opacity = '1';
      setTimeout(function () {
        dateMenuSwitch=1;
      }, 1000);
    }, 100);
  }
}
