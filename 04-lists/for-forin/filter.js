const {getPokemons} = require('./service')

async function main(){
    try {
        const{
            results
        } = await getPokemons()

        // It filters only the Pokemons with 'aur' in their names.
        const selectedPokemons = results.filter(function(item){
            const result = item.name.toLowerCase().indexOf('aur') !== -1
            return result
        })

        // Uses a map to take only the Pokemons' name.
        const selectedNames = selectedPokemons.map((pokemon) => pokemon.name)
        console.log(selectedNames);

    } catch (error) {
        console.error('Error detected!', error);
    }
}

main()