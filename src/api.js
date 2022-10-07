const COLOR = require('./colors');
const TYPE = require('./pokemon-types');

// Pokemons from first region
const pokemons_num = 151;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_num; i++) {
		await getPokemon(i);
	}
};

// Get 151 pokemons from Pokeapi, fetchPokemons calls getPokemon 151 times.
//And stores the data in 'const pokemon'.
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const response = await fetch(url);
	const pokemon = await response.json();
	createPokemonCard(pokemon);
};

// Function to create cards with pokemons data
function createPokemonCard(pokemon) {

    //CONST
	
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // Padstart for 3 numbers position with '0' at the start.
	const id = pokemon.id.toString().padStart(3, '0')
	
    // Get an array with pokemon types (Normal, Fire, water, etc.). Can be up to 2 types. First letter toUpperCase.
    const pokemon_types = pokemon.types.map(type => type.type.name[0].toUpperCase()+type.type.name.slice(1));
    
    const primaryType = pokemon_types[0];

    const secondaryType = new Array(pokemon_types[1]).filter(item => item != undefined);
	
    // Set the color using the name of the type and the colors array with types names.
    const color = COLOR.colors[primaryType];
    
    // Set the icons paths for the pokemon types
    const icon1 = new Array(TYPE.TypeIcons[primaryType]);
    const icon2 = new Array(TYPE.TypeIcons[secondaryType]).filter(item => item != undefined);
	
    const height = pokemon.height/10;
	
    const weight = pokemon.weight/10;
	
    const ability = pokemon.abilities.map(ability=> ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)).join(", ");

    // Function to send dato to the card.
    
	
}

fetchPokemons();
