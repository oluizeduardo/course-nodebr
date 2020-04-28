const axios = require('axios')
const URL = 'https://api.pokemontcg.io/v1/cards'

async function getAllPokemons(){
  const response = await axios.get(URL)
  return response.data
}

module.exports = {
  getPokemons: getAllPokemons
}