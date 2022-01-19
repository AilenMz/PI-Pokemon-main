const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonRoutes = require('./pokemons')
const TypeRoutes = require('./types')


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('', PokemonRoutes);
router.use('', TypeRoutes);

// el path se lo paso directamente por las rutas, 
//sino quedaria así y deberia sacar el pokemons en las rutas
//router.use("/pokemons", Pokemons);

router.get("/", (req, res) => {
  res.send("Back End de PokeApp by Ailen Martinez");
});


module.exports = router;