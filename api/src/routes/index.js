const { Router } = require('express');
const axios = require('axios')
const {getApiInfo, getDbInfo, getAllPokemons} = require('./getFunctions.js')
const {Pokemon, Types} = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

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
    
    charactedCreated.addTypes(typeinDB)
    res.send('personaje creado con exito')
})

router.get('/types', async (req, res) =>{
    
    //si tengo dudas con el codigo consologuear todas las const
        const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
        const types = typesApi.data.results.map(el => el.name)
        // una vez que obtengo el array de ocupaciones (occ), agrego cada elemento con secualice
        types.forEach(element => {
            Types.findOrCreate({
                where: {name: element}
            })
        });
        const AllTypes = await Types.findAll()
        res.send(AllTypes)
    });

module.exports = router;
