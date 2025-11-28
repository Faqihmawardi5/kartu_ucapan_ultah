const audio = document.getElementById("birthday-audio");
const playButton = document.getElementById("play-music-btn");

playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
});
