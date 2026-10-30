const ambientVideo = document.querySelector(".intro-video video");
const ambientCanvas = document.querySelector(".intro-ambient");

if (ambientVideo && ambientCanvas) {
  const ctx = ambientCanvas.getContext("2d");

  function paintAmbient() {
    if (ambientVideo.readyState >= 2) {
      // se mezcla poco a poco con el fotograma anterior para que no parpadee
      ctx.globalAlpha = 0.04;
      ctx.drawImage(ambientVideo, 0, 0, ambientCanvas.width, ambientCanvas.height);
    }
    requestAnimationFrame(paintAmbient);
  }

  paintAmbient();
}
