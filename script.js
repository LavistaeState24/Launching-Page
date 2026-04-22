const targetDate = new Date("May 30, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = String(d).padStart(2, "0");
    document.getElementById("hours").innerText = String(h).padStart(2, "0");
    document.getElementById("minutes").innerText = String(m).padStart(2, "0");
    document.getElementById("seconds").innerText = String(s).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

lucide.createIcons();