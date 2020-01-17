var video = document.getElementById("video");
var playButton = document.getElementById("play-pause");

playButton.addEventListener("click", function () {
    document.getElementById("custom-video").style.visibility = "hidden";
    if (video.paused == true) {
        video.style.filter = "brightness(100%)";
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener("click", function() {
    if (video.paused == false) {
        video.style.filter = "brightness(45%)";
        video.pause();
        document.getElementById("custom-video").style.visibility = "visible";
    }
    else {}
});