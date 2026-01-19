const screen = document.querySelector(".game-screen-container");
const healthText = document.getElementById("health-text");
const healthFill = document.getElementById("health-fill");
const pokemon = document.querySelector("#pokemon-asset img");

let maxHP = 100;
let currentHP = 100;

function randomiseSprite(){
    if(currentHP === 0){
        const randomPokemon = Math.floor((Math.random() * 151)+1);
        pokemon.src=`./assets/pokemon/gen1/${randomPokemon}.png`;

        currentHP = maxHP;
        healthText.textContent = `${currentHP} / ${maxHP}`;

        const newPercent = (currentHP / maxHP) * 100;
        healthFill.style.width = newPercent + "%";
    }
}

screen.addEventListener("click", () => {
    currentHP = Math.max(0, currentHP - 10);

    const percent = (currentHP / maxHP) * 100;
    healthFill.style.width = percent + "%";

    healthText.textContent = `${currentHP} / ${maxHP}`;

    randomiseSprite();

});
