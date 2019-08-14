// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var playerFeaturedBands;
function onYouTubePlayerAPIReady() {
  playerFeaturedBands = new YT.Player('featuredVid', {
    height: '360',
    width: '640',
    videoId: 'dy_TXvnF9RU',
    playerVars: { rel: 0, showinfo: 0, controls: 0}
  });
}

//  custom

var ytFeaturedSec = document.getElementsByClassName('ytFeaturedSec');

function playYTfeaturedBands() {
  if(ytFeaturedSec[0].getBoundingClientRect().top < window.innerHeight){
    console.log('yt feature if');
    playerFeaturedBands.playVideo();
  }
}

window.addEventListener('scroll',()=>{
  playerFeaturedBands.playVideo()
})
