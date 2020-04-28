const service = require('./service.js')

async function main(){
    try {
        const result = await service.getPokemons()
        
        console.log(result);        

    } catch (error) {
        console.error('An error occured while consulting the list of Pokemons.');
    }
}

main()
