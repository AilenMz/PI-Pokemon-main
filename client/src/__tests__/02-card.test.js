import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";

import * as data from './dbPrueba.json';
import Card from '../Components/Card/Card.jsx'

configure({ adapter: new Adapter() });

describe("<Card />", () => {
    let pokemonCard;
    let [char1, char2, char3] = data.pokemons;
   
    beforeEach(() => {
        pokemonCard = (pokemon) =>
          shallow(
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
              type={pokemon.type ? pokemon.type : pokemon.types.map(el => el.name)}
              attack={pokemon.attack}
            />
          );
        expect(isReact.classComponent(Card)).toBeFalsy();
      });

      xit('Debería renderizar un tag "img" y utilizar como source la imagen del pokemon', () => {
        expect(pokemonCard(char1).find("img").at(0).prop("src")).toEqual(
          char1.img
        );
        expect(pokemonCard(char2).find("img").at(0).prop("src")).toEqual(
          char2.img
        );
        expect(pokemonCard(char3).find("img").at(0).prop("src")).toEqual(
          char3.img
        );
      });

      xit('Debería renderizar un "h1" que contenga el nombre del pokemon con la primera letra en mayuscula', () => {
        expect(pokemonCard(char1).find("h1").at(0).text()).toBe(`${char1.name.charAt(0).toUpperCase() + char1.name.slice(1)}`);
        expect(pokemonCard(char2).find("h1").at(0).text()).toBe(`${char2.name.charAt(0).toUpperCase() + char2.name.slice(1)}`);
        expect(pokemonCard(char3).find("h1").at(0).text()).toBe(`${char3.name.charAt(0).toUpperCase() + char3.name.slice(1)}`);
      });

      xit('Debería renderizar un "h4" que contenga el texto "Attack: " más la fuerza del pokemon', () => {
        expect(pokemonCard(char1).find("h4").at(0).text()).toBe(
          `Attack: ${char1.attack}`
        );
        expect(pokemonCard(char2).find("h4").at(0).text()).toBe(
          `Attack: ${char2.attack}`
        );
        expect(pokemonCard(char3).find("h4").at(0).text()).toBe(
          `Attack: ${char3.attack}`
        );
      });

      xit('Debería renderizar un "h3" que contenga el por cada tipo (pokeapi)', () => {
        expect(pokemonCard(char1).find("h3").at(0).text()).toBe(
          `${char1.type[0].charAt(0).toUpperCase() + char1.type[0].slice(1)}`
        );
        expect(pokemonCard(char1).find("h3").at(1).text()).toBe(
            `${char1.type[1].charAt(0).toUpperCase() + char1.type[1].slice(1)}`
          );
        expect(pokemonCard(char2).find("h3").at(0).text()).toBe(
          `${char2.type[0].charAt(0).toUpperCase() + char2.type[0].slice(1)}`
        );
        expect(pokemonCard(char2).find("h3").at(1).text()).toBe(
            `${char2.type[1].charAt(0).toUpperCase() + char2.type[1].slice(1)}`
          );
      });

      xit('Debería renderizar un "h3" que contenga el por cada tipo si viene de base de datos', () => {
        expect(pokemonCard(char3).find("h3").at(0).text()).toBe(
          `${char3.types[0].name.charAt(0).toUpperCase() + char3.types[0].name.slice(1)}`
        );
        expect(pokemonCard(char3).find("h3").at(1).text()).toBe(
            `${char3.types[1].name.charAt(0).toUpperCase() + char3.types[1].name.slice(1)}`
          );
      });
    
    
})