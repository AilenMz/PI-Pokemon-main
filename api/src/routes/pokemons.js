const { Router } = require('express');
const {getAllPokemons} = require('./utils/getFunctions.js')
const {Pokemon, Types} = require('../db.js');
const e = require('express');


const router = Router();


// aca hago 2 rutas en 1 :  GET /characters /  ] GET /characters?name="..."
router.get('/pokemons', async(req, res) => {
    const {name} = req.query
    let totalPokemons = await getAllPokemons()

    if (name) {
        let characterName = totalPokemons.filter( e => e.name.toLowerCase().includes(name.toLowerCase()))
        characterName.length ? res.status(200).send(characterName) : res.status(404).send('Character Not Found')
    } else {
        res.status(200).send(totalPokemons)
    }
})

router.get('/pokemons/:id', async (req, res) => {
    const {id} = req.params

    const Total = await getAllPokemons()

    if (id) {
        let pokemonID = Total.filter(e => e.id == id)
        pokemonID.length ? 
        res.status(200).json(pokemonID) 
        : res.status(404).send('Character not found')
    }
})

router.post('/pokemons', async (req, res) => {
    const {name, hp, attack, defense, speed, height, weight, img, createdInDb, type} = req.body

    const charactedCreated = await Pokemon.create({
        name, 
        hp, 
        attack, 
        defense, 
        speed,
        height,
        weight,
        img,
        createdInDb 
    })

    let typeinDB = await Types.findAll({
        where: {name: type}
    })

    // let map = typeinDB.map(e => e.dataValues.name)
    // console.log(map)
    
    charactedCreated.addType(typeinDB)
    res.send('personaje creado con exito')
})


module.exports = router;