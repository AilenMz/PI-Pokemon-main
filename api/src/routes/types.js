const { Router } = require('express');
const axios = require('axios')
const {Types} = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


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