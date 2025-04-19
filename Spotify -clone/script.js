let isPlaying = false;
const playBtn = document.getElementById("playBtn");
const progress = document.querySelector(".progress");

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "⏸️ Pause" : "▶️ Play";
  if (isPlaying) {
    simulateProgress();
  }
});

function simulateProgress() {
  let percent = 0;
  const interval = setInterval(() => {
    if (!isPlaying || percent >= 100) {
      clearInterval(interval);
    } else {
      percent += 1;
      progress.style.width = percent + "%";
    }
  }, 300);
}
