const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

async function getAllPokemons(){
  const response = await axios.get(URL)
  return response.data
}

module.exports = {
  getPokemons: getAllPokemons
}