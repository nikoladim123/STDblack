var dateOverlay = document.getElementsByClassName('dateOverlay');
var checkAvailability = document.getElementsByClassName('checkAvailability');
var closeDateBox = document.getElementsByClassName('closeDateBox');
var dateImg = document.getElementsByClassName('dateImg');

for (var i = 0; i < checkAvailability.length; i++) {
  checkAvailability[i].addEventListener('click',()=>{
    openDateMenuFun();
  });
};

closeDateBox[0].addEventListener('click',()=>{
  if(dateMenuSwitch === 1){
    dateOverlay[0].style.opacity = '0';
    // dateImg[0].style.marginLeft = '10.4229vw'
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
      // dateImg[0].style.marginLeft = '13.4229vw'
      setTimeout(function () {
        dateMenuSwitch=1;
      }, 1000);
    }, 100);
  }
}


// GRID TIME BOX CLICKS
var timeBox = document.getElementsByClassName('timeBox');

var selectedMoreThenTwo = false;
for (var i = 0; i < timeBox.length; i++) {
  timeBox[i].addEventListener('click',(e)=>{
    var state = Object.values(timeBox).filter(word => word.dataset.clickstate === '1');
    if (state.length < 1) {
      selectedMoreThenTwo = false;
    }
    console.log(state.length);
    if(e.currentTarget.dataset.clickstate === '0'){
      e.target.style.background = '#ffd88a';
      e.target.dataset.clickstate = '1';
      if (!selectedMoreThenTwo) {
        e.currentTarget.nextElementSibling.style.background = '#ffd88a';
        e.currentTarget.nextElementSibling.dataset.clickstate = '1';
        selectedMoreThenTwo = true;
      }
    }else{
      e.target.style.background = '#9ffec6';
      e.target.dataset.clickstate = '0';
    }
    // e.target.style.background = 'red';
    console.log(e.currentTarget.nextElementSibling);
  })
}
