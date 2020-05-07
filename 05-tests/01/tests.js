const assert = require('assert')
const {
    getPokemon
} = require('./service')


describe('Pokémon tests', function(){

    it('Must fetch bulbasaur in the right format.', async () => {
        const expected = [{name: 'bulbasaur'}]
        const actual = await getPokemon()        

        assert.deepEqual(actual, expected, "It's not equal!")
    })

})