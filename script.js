const messages = [
    "Sure?",
    "Really sure? :(",
    "Ngano man😔",
    "Baby please",
    "Sige naa",
    "If you say no, ako ay ma sad",
    "So sad ",
    "Ok fine, aynalang :<",
    "Eme lang, sige na pls😁"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function confettiFunc() {
    const yesButton = document.querySelector('.yes-button');
    const messages = ["I love youuu, my babyyy😚🤍"];

    yesButton.textContent = messages[messageIndex];
    yesButton.addEventListener("click", () => {
        const defaults = {
            spread: 360,
            ticks: 100,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["heart"],
            colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        };

        confetti({
            ...defaults,
            particleCount: 50,
            scalar: 2,
        });

        confetti({
            ...defaults,
            particleCount: 25,
            scalar: 3,
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 4,
        });
    });
}