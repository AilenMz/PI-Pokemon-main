const { Pokemon, Types, conn } = require('../../src/db.js');
const { expect } = require('chai');


xdescribe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Pokemon Model Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
    describe('hp', () => {
      it('should throw an error if hp is a string', (done) => {
        Pokemon.create({hp: 'hola'})
          .then(() => done(new Error('It requires a valid hp value')))
          .catch(() => done());
      });
      it('should work when its a valid value', () => {
        Pokemon.create({ hp: 25 });
      });
    });
  });
  describe('Types Model Validators', () => {
    beforeEach(() => Types.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Types.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Types.create({ name: 'Fire' });
      });
      it('should throw an error if name is not a string', (done) => {
        Types.create({name : 43})
          .then(() => done())
          .catch(() => done(new Error('It requires a valid name')));
      });
    });
  });
});

