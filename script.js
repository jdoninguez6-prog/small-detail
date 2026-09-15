const envelope = document.getElementById("envelope");
const scene = document.querySelector(".scene");
const song = document.getElementById("song");

envelope.addEventListener("click", () => {
  scene.classList.toggle("open");

  if (scene.classList.contains("open")) {
    song.currentTime = 0;

    song.play();
  } else {
    song.pause();

    song.currentTime = 0;
  }
});
