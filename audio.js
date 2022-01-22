let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");

var audioElement = document.createElement("audio");
audioElement.src = "Fun/bruh.wav";
audioElement.autoplay = "true";
document.body.appendChild(audioElement);

let audioPlay = function(event) {
    event.preventDefault(); // This line prevents the browser page from exiting.
    audioElement.play();
};

playButton.addEventListener("click", audioPlay);

let pause = function() {
    audioElement.pause();
};

pauseButton.addEventListener("click", pause);
