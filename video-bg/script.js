var video = document.getElementById('coffee');

var btn = document.getElementById('playBtn');

function videoPlay(){
    if(video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}