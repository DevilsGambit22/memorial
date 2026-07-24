
const audio = document.getElementById("memorialAudio");
const audioFallback = document.getElementById("audioFallback");
const embers = document.getElementById("embers");
const chessboard = document.getElementById("chessboard");

const MAX_TRACKS = 50;
let playlist = [];
let currentTrack = 0;

function createEmbers() {
  const count = window.innerWidth < 600 ? 34 : 70;
  for (let i = 0; i < count; i++) {
    const ember = document.createElement("span");
    ember.className = "ember";
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.setProperty("--duration", `${10 + Math.random() * 18}s`);
    ember.style.setProperty("--delay", `${-Math.random() * 25}s`);
    ember.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    const size = 1 + Math.random() * 3;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    embers.appendChild(ember);
  }
}

function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("span");
      square.className = `square ${(row + col) % 2 ? "dark" : "light"}`;
      chessboard.appendChild(square);
    }
  }
}

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function discoverTracks() {
  const checks = [];
  for (let i = 1; i <= MAX_TRACKS; i++) {
    const number = String(i).padStart(2, "0");
    const file = `assets/music/${number}.mp3`;
    checks.push(fileExists(file).then(exists => exists ? file : null));
  }

  playlist = (await Promise.all(checks)).filter(Boolean);

  if (playlist.length) {
    audio.src = playlist[0];
    audio.loop = playlist.length === 1;
    attemptAutoplay();
  }
}

async function attemptAutoplay() {
  try {
    audio.volume = 0.72;
    await audio.play();
    audioFallback.hidden = true;
  } catch {
    // Modern browsers often block audible autoplay inside iframes.
    audioFallback.hidden = false;
  }
}

audio.addEventListener("ended", () => {
  if (!playlist.length) return;
  currentTrack = (currentTrack + 1) % playlist.length;
  audio.src = playlist[currentTrack];
  audio.play().catch(() => {
    audioFallback.hidden = false;
  });
});

audioFallback.addEventListener("click", async () => {
  try {
    await audio.play();
    audioFallback.hidden = true;
  } catch {
    audioFallback.textContent = "Audio unavailable";
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    audio.pause();
  } else if (playlist.length) {
    attemptAutoplay();
  }
});

window.addEventListener("pagehide", () => {
  audio.pause();
  audio.currentTime = 0;
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

createEmbers();
createBoard();
discoverTracks();
