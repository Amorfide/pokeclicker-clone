let health = document.getElementById("health")
const screen = document.querySelector(".game-screen-container");

screen.addEventListener("click", () => {
    health.value = health.value -10; 
});
