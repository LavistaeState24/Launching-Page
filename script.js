document.addEventListener("DOMContentLoaded", function () {

    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    /*
     * Update website launch date here.
     * Format: YYYY-MM-DDTHH:MM:SS
     */
    const launchDate = new Date("2026-10-30T10:00:00").getTime();

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    let countdownInterval;

    function formatNumber(number) {
        return String(number).padStart(2, "0");
    }

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = launchDate - currentTime;

        if (distance <= 0) {
            clearInterval(countdownInterval);

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        daysElement.textContent = formatNumber(days);
        hoursElement.textContent = formatNumber(hours);
        minutesElement.textContent = formatNumber(minutes);
        secondsElement.textContent = formatNumber(seconds);
    }

    updateCountdown();

    countdownInterval = setInterval(updateCountdown, 1000);
});