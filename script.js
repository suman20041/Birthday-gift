const celebrateBtn = document.getElementById("celebrateBtn");

const confettiColors = ["#d4a853", "#f2d98a", "#8e4fad", "#faf3e8", "#5e2d72"];

window.onload = () => {
    launchConfetti();
};

celebrateBtn.addEventListener("click", () => {
    launchConfetti();
});

function launchConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 8,
            startVelocity: 30,
            spread: 360,
            colors: confettiColors,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
    }, 120);
}
