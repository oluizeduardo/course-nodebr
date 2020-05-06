const service = require('./service.js')

async function main(){
    try {
        // The list of Pokemons in JSON format.
        const resultJSON = await service.getPokemons()

        // For to get only the names.
        for(let i=0; i <= resultJSON.results.length-1; i++){
            console.log('['+(i+1)+'] '+resultJSON.results[i].name);
        }

        // // ForIn to get only the names.
        // for (const i in resultJSON.results) {
        //     console.log(resultJSON.results[i].name);
        // }

        // // ForOf to get only the names.
        // for (const pokemon of resultJSON.results) {
        //     console.log(pokemon.name);
        // }
    
    } catch (error) {
        console.error('An error occured while consulting the list of Pokemons.', error);
    }
}

main()
