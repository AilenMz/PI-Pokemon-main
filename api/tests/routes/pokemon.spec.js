/* eslint-disable import/no-extraneous-dependencies */
const {expect} = require('chai');
const session = require('supertest-session');
var supertest = require("supertest-as-promised")(require("../../src/app.js"))
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

xdescribe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('responds with 200', () => agent.get('/pokemons').expect(200));
    it('responds with and object with name `bulbasaur`', () =>
        agent.get('/pokemons').then((res) => {
          expect(res.body[0].name).to.equal('bulbasaur');
        }));
    it('Si se pasa query responde con un objeto con los datos del pokemon`', () =>
        agent.get('/pokemons?name=ivysaur').then((res) => {
          expect(res.body[0].name).to.equal('ivysaur');
        }));
  it('Si se pasa query no existente responde con error`', () =>
        agent.get('/pokemons?name=Goku').then((res) => {
          expect(res.text).to.equal("Character Not Found");
        }));
  });

  describe('GET /pokemons/:id', () => {
    it("responde con un objeto con los datos del pokemon", function () {
      return supertest
        .get("/pokemons/2")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql({
            id: 2,
            name: 'ivysaur',
            hp: 60,
            attack: 62,
            defense: 63,
            speed: 60,
            height: 100,
            weight: 13,
            type: [ 'grass', 'poison' ],
            img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
          });
        });
    });
    it('Si no existente responde con error`', () =>
        agent.get('/pokemons/55').then((res) => {
          expect(res.text).to.equal("Character Not Found");
        }));
  });

  describe('/POST /pokemons', () =>{
    it('POST agrega un nuevo pokemon', function(){
      return supertest
    .post("/pokemons")
    .send({
      name: "Ailen",
      hp: 43,
      attack: 120,
      defense: 50,
      speed: 60,
      height: 150,
      weight: 55, 
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
      type:['Fire']
    })
    .expect(200)
    .expect(function (res) {
      console.log(res.text)
      expect(res.text).to.eql("personaje creado con exito");
    });
    })
  })

});

