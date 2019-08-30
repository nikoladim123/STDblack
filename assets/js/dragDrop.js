var container = document.getElementsByClassName('container');
var box = document.getElementsByClassName('box');
var videoContentInside = document.getElementsByClassName('videoContentInside');

var numberOfBoxes = 5;

var dragedBox;
for (var i = 0; i < box.length; i++) {
  // initiate order
  // box[i].style.order = i+1;

  box[i].addEventListener('dragstart',(e)=>{
    // e.preventDefault();
    // dragedBox = e.target.dataset.position;
    // e.target.style.oreder = ;
    // console.log(e.target);
    for (var i = 0; i < videoContentInside.length; i++) {
      videoContentInside[i].style.pointerEvents = 'none';
    }
    e.dataTransfer.setData('text/plain',e.target.dataset.position);
    e.target.style.border = '1px solid orange';
  });

  box[i].addEventListener('dragover',(e)=>{
    e.target.style.border = '1px solid orange';
    e.target.style.filter = 'brightness(1.5)'
  });
  // box[i].addEventListener('dragleave',(e)=>{
  //   e.target.style.border = '1px solid transparent';
  //   e.target.style.filter = 'brightness(1)'
  // });


  box[i].addEventListener('drop',(e)=>{
    e.preventDefault();
    var dataEventOrder = e.dataTransfer.getData('text/plain');
    for (var i = 0; i < box.length; i++) {
      if (box[i].dataset.position === dataEventOrder) {
        box[i].dataset.position = e.target.dataset.position ;
        console.log(box[i] , e.target.dataset.position);
      }
    }

    for (var i = 0; i < videoContentInside.length; i++) {
      videoContentInside[i].style.pointerEvents = 'all';
      box[i].style.border = '1px solid transparent';
      box[i].style.filter = 'brightness(1)'
    }
    // box[dataEventOrder].style.order = e.target.dataset.position;
    // box[dataEventOrder].dataset.position = e.target.dataset.position;
    e.target.dataset.position = dataEventOrder;
    console.log(e.dataTransfer.getData('text/plain'));
    // e.target.style.order = dragedBox;
    // var bla = e.dataTransfer.getData('text/plain');
    // console.log(bla);
  });

};


console.log(12);



function onDrop(event) {
  // var data = event.dataTransfer.getData("text/plain");
  // event.target.textContent = data;
  event.preventDefault();
  // if (ev.target.getAttribute("draggable") == "true"){
  //   ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
  //
  // }else{
  //     ev.dataTransfer.dropEffect = "all"}
}
