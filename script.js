// Countdown Logic
const weddingDate = new Date("May 10, 2026 10:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "HAPPY WEDDING DAY!";
    }
}, 1000);

// Music Control
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    
    if (music.paused) {
        music.play();
        icon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
        music.pause();
        icon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
}
