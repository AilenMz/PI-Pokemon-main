const axios = require('axios')

const getApiInfo = async () => {

// const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
// MaxPokemon = await apiUrl.data.count

    let id = 1
    let AllPromises = []

    while(id <= 200){
        AllPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
        id++
    }

    const getAllApiPokemons = await Promise.all(AllPromises) // el await es porque sino el getAllApiPokemos me devuelve una promesa sin resolver
    
    try {
        let pokeArray = getAllApiPokemons.map((e) => {
            return {
                id: e.data.id,
                name: e.data.name,
                hp: e.data.stats[0].base_stat,
                attack: e.data.stats[1].base_stat,
                defense: e.data.stats[2].base_stat,
                speed: e.data.stats[5].base_stat,
                height: e.data.height,
                weight: e.data.weight,
                img: e.data.sprites.other.dream_world.front_default
            }
        })
        console.log(pokeArray)
    } catch (error) {
        console.log(error)
    }
          
}

//getApiInfo()
