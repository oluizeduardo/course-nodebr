const {
    get
} = require('axios')

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'



async function getPokemon(){

    // Returns the result in JSON format.
    const result = await get(URL)  

    // Returns all the Pokemons to a new list.
    const allPokemons = result.data.results

    // It filters only the Pokemons with 'aur' in their names.
    const filteredPokemons = allPokemons.filter(function(item){
        const res = item.name.toLowerCase().indexOf('bulbasaur') !== -1
        return res
    })
    
    // It maps the list in order to return only what really matters.
    const mappedPokemons = filteredPokemons.map(mapPokemon)

    return mappedPokemons
}


function mapPokemon(item){
    return{
        name: item.name
    }
}


module.exports = {
    getPokemon
}