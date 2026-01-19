const screen = document.querySelector(".game-screen-container");
const healthText = document.getElementById("health-text");
const healthFill = document.getElementById("health-fill");
const pokemon = document.querySelector("#pokemon-asset img");
const pokemonName = document.getElementById("pokemon-name");


const gen1Pokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon",
  "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
  "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill",
  "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
  "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu",
  "Raichu", "Sandshrew", "Sandslash", "Nidoran ♀", "Nidorina",
  "Nidoqueen", "Nidoran ♂", "Nidorino", "Nidoking", "Clefairy",
  "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff",
  "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
  "Paras", "Parasect", "Venonat", "Venomoth", "Diglett",
  "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck",
  "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
  "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam",
  "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell",
  "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler",
  "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro",
  "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio",
  "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
  "Cloyster", "Gastly", "Haunter", "Gengar", "Onix",
  "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb",
  "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak",
  "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing",
  "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan",
  "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
  "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz",
  "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados",
  "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon",
  "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto",
  "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos",
  "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo",
  "Mew"
];


let maxHP = 100;
let currentHP = 100;

function randomiseSprite(){
    const randomPokemon = Math.floor((Math.random() * 151)+1);
    pokemon.src=`./assets/pokemon/gen1/${randomPokemon+1}.png`;
    pokemonName.textContent = gen1Pokemon[randomPokemon];

    currentHP = maxHP;
    healthText.textContent = `${currentHP} / ${maxHP}`;

    const newPercent = (currentHP / maxHP) * 100;
    healthFill.style.width = newPercent + "%";
    
}

screen.addEventListener("click", () => {
    currentHP = Math.max(0, currentHP - 10);

    const percent = (currentHP / maxHP) * 100;
    healthFill.style.width = percent + "%";

    healthText.textContent = `${currentHP} / ${maxHP}`;

    if(currentHP === 0){
        randomiseSprite();
    }

});
