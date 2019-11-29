// ajax
var ytVideos = [];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText)
    ytVideos = JSON.parse(this.responseText);
    initiateVideoElements()
    // init gallery
  }
};
xhttp.open("GET", "http://149.56.98.59:3055/yt", true);
xhttp.send();


// JSX content;
// create content
var sectionGridYT = document.getElementsByClassName('sectionGridYT');

// 4 different class names used for boxes /in each loop different class is used
var gridBoxClassNames = ['gridSpanThree','gridSpanTwoLong','gridSpanTwoShort','gridSpanSmall'];

// inition each Box every new loop for different content
var gridBox;
function initiateGridBox(i) {
  gridBox = `
  <div class="gridBoxContent ">
    <h2>FULL PARTY <br>
    IN BOSTON </h2>
    <hr>
    <p>Local Boys were fantastic <br>
    At the Burkley Performance Center</p>
  </div>
  <iframe src="${ytVideos.ytVids[i]}?rel=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=0&amp;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
  `;
}


// called uplod readyState 4
function initiateVideoElements() {
  for (var i = 0; i < ytVideos.ytVids.length; i++) {
    initiateGridBox(i);
    var newDiv = document.createElement('div');
    newDiv.className = gridBoxClassNames[i%4];
    newDiv.className += " bandsVideoBoxContainer"
    newDiv.innerHTML = gridBox;
    sectionGridYT[0].append(newDiv);
  }
}
