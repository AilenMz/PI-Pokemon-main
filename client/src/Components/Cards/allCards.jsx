import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/Actions/index.js";

//components
import Card from "../Card/Card.jsx";
import Paginado from "../paginated/paginado.jsx";

export default function AllCards() {
  
  const allPokemons = useSelector((state) => state.pokemons); // es lo mismo que hacer mapSatetoProps
  const dispatch = useDispatch(); // es lo mismo que hacer mapdispatch to props

  const [currentPage, setCurrentPAge] = useState(1);
  const [pokemonsXpage] = useState(6);

  let indexLastPokemon = currentPage * pokemonsXpage; //6
  let indexFirstPokemon = indexLastPokemon - pokemonsXpage; //0
  let currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon);

  const paginado = (pageNumber) => {
    setCurrentPAge(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <Paginado
        pokemonsXpage={pokemonsXpage}
        allPokemons={allPokemons.length}
        paginado={paginado}
      />
      <div>
        {currentPokemons?.map((el) => {
          return (
            <Card 
              key={el.id} 
              name={el.name} 
              img={el.img} 
              type={el.type} />
          );
        })}
      </div>
    </div>
  );
}
