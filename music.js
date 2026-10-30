const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

function render(on) {
  toggle.classList.toggle("is-on", on);
  toggle.setAttribute("aria-pressed", on);
  toggle.setAttribute("aria-label", on ? "Silenciar música" : "Activar música");
}

function setStored(on) {
  try { localStorage.setItem("music", on ? "on" : "off"); } catch (e) {}
}

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => { render(true); setStored(true); });
  } else {
    music.pause();
    render(false);
    setStored(false);
  }
});

try {
  music.currentTime = parseFloat(sessionStorage.getItem("musicTime")) || 0;
  if (localStorage.getItem("music") === "on") {
    music.play().then(() => render(true)).catch(() => render(false));
  }
} catch (e) {}

window.addEventListener("pagehide", () => {
  try { sessionStorage.setItem("musicTime", music.currentTime); } catch (e) {}
});
