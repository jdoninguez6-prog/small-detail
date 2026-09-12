const envelope = document.getElementById("envelope");
const scene = document.querySelector(".scene");

envelope.addEventListener("click", () => {
  scene.classList.toggle("open");
});
