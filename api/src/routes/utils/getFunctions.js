const axios = require('axios')
const {Pokemon, Types} = require('../../db.js')

const getApiInfo = async () => {

//     const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
//     let MaxPokemon = await apiUrl.data.count

    let id = 1
    let AllPromises = []

    while(id <= 40){
        AllPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
        id++
    }

    const getAllApiPokemons = await Promise.all(AllPromises) // el await es porque sino el getAllApiPokemos me devuelve una promesa sin resolver
        .then((pokemon) => {
            let pokeArray = pokemon.map((e) => {
                return {
                    id: e.data.id,
                    name: e.data.name,
                    hp: e.data.stats[0].base_stat,
                    attack: e.data.stats[1].base_stat,
                    defense: e.data.stats[2].base_stat,
                    speed: e.data.stats[5].base_stat,
                    height: e.data.height * 10, //la data viene en decimetros y lo paso a cm
                    weight: e.data.weight * 0.1, // la data viene en hectogramos y la paso a kg
                    type: e.data.types.map(el => el.type.name),
                    img: e.data.sprites.other.dream_world.front_default
                }
            })
            return pokeArray
        })
       return getAllApiPokemons
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