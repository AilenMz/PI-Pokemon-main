const { Router } = require("express");
const { getAllPokemons } = require("./utils/getFunctions.js");
const { Pokemon, Types } = require("../db.js");
const e = require("express");

const router = Router();

// aca hago 2 rutas en 1 :  GET /characters /  ] GET /characters?name="..."
router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  let totalPokemons = await getAllPokemons();

  if (name) {
    let pokemonName = totalPokemons.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonName.length
      ? res.status(200).send(pokemonName)
      : res.status(404).send("Character Not Found");
  } else {
    res.status(200).send(totalPokemons);
  }
});

// router.get("/pokemons", async (req, res) => {
//   const { name } = req.query;
//   let totalPokemons = await getAllPokemons();

//   if (name) {
//     let pokemonnName = (await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
//     let poke = {
//                     id: pokemonnName.id,
//                     name: pokemonnName.name,
//                     hp: pokemonnName.stats[0].base_stat,
//                     attack: pokemonnName.stats[1].base_stat,
//                     defense: pokemonnName.stats[2].base_stat,
//                     speed: pokemonnName.stats[5].base_stat,
//                     height: pokemonnName.height * 10, //la data viene en decimetros y lo paso a cm
//                     weight: pokemonnName.weight * 0.1, // la data viene en hectogramos y la paso a kg
//                     type: pokemonnName.types.map(el => el.type.name),
//                     img: pokemonnName.sprites.other.dream_world.front_default
//     }
//     console.log(poke)
//     poke.hasOwnProperty('id')
//       ? res.status(200).send(poke)
//       : res.status(404).send("Character Not Found");
//   } else {
//     res.status(200).send(totalPokemons);
//   }
// });




router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;

  const Total = await getAllPokemons()
  
  if (id) {
    let pokemonID = Total.filter((e) => e.id == id);
    pokemonID.length
      ? res.status(200).json(pokemonID[0])
      : res.status(404).send("Character Not Found");
  }
});

router.post("/pokemons", async (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
    createdInDb,
    type,
  } = req.body;

  const pokemonCreated = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
    createdInDb,
  });

  let typeinDB = await Types.findAll({
    where: { name: type },
  });
  // let map = typeinDB.map(e => e.dataValues.name)
  // console.log(map)

  pokemonCreated.addType(typeinDB);
  res.send("personaje creado con exito");
});

// router.get("/orden", async (req, res) => {
//   const { orden } = req.query;
//   let totalPokemons = await getAllPokemons();

//   let sorted = orden === 'NONE' ? totalPokemons :
//     orden === "ASC"
//       ? totalPokemons.sort(function (a, b) {
//           if (a.name > b.name) {
//             return 1;
//           }
//           if (a.name < b.name) {
//             return -1;
//           }
//           // a must be equal to b
//           return 0;
//         })
//       : totalPokemons.sort(function (a, b) {
//           if (a.name > b.name) {
//             return -1;
//           }
//           if (a.name < b.name) {
//             return 1;
//           }
//           // a must be equal to b
//           return 0;
//         });

//   res.send(sorted);
// });

router.get("/pokemons2", async (req, res) => {
  const { name } = req.query;
  let totalPokemons = getAllPokemons()
    .then((data) => {
      if (name) {
        let characterName = data.filter((e) =>
          e.name.toLowerCase().includes(name.toLowerCase())
        );
        characterName.length
          ? res.status(200).send(characterName)
          : res.status(404).send("Character Not Found");
      } else {
        res.status(200).send(data);
      }
    })
    .catch(error => console.log(error))

});


module.exports = router;
