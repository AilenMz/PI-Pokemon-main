const axios = require('axios')
const {Pokemon, Types} = require('../db.js')

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
    let MaxPokemon = await apiUrl.data.count
    let id = 1
    const apiInfo = []

    while(id <= 2){
        const apiUrlxid = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await apiUrlxid.data
        apiInfo.push({
            id: data.id,
            name: data.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            img: data.sprites.other.dream_world.front_default
            })
        id++
    }
   return apiInfo
}

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getAllPokemons = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal
}

module.exports ={
    getApiInfo,
    getDbInfo,
    getAllPokemons
}