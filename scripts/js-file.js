const screen = document.querySelector(".game-screen-container");
const healthText = document.getElementById("health-text");
const healthFill = document.getElementById("health-fill");

let maxHP = 100;
let currentHP = 100;

screen.addEventListener("click", () => {
    currentHP = Math.max(0, currentHP - 10);

    const percent = (currentHP / maxHP) * 100;
    healthFill.style.width = percent + "%";

    healthText.textContent = `${currentHP} / ${maxHP}`;
});
