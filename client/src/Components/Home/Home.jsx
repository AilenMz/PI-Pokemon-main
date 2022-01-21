import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {getAllPokemons, getAllTypes, filterByOrigin} from '../../Redux/Actions/index.js'

//---------------------
import NavBar from "../NavBar/NavBar.jsx";
import { StyledHome } from "./StyledHome";
import AllCards from "../Cards/allCards.jsx";
import Filters from "../Filters/filters.jsx";

export default function Home() {

  const allTypes = useSelector((state) => state.types);
  const allPokemons = useSelector((state) => state.pokemons); // es lo mismo que hacer mapSatetoProps
  const dispatch = useDispatch(); // es lo mismo que hacer mapdispatch to props

  const [currentPage, setCurrentPAge] = useState(1);
  const [pokemonsXpage] = useState(10);

  let indexLastPokemon = currentPage * pokemonsXpage; //12
  let indexFirstPokemon = indexLastPokemon - pokemonsXpage; //0
  let currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon);

  const paginado = (pageNumber) => {
    setCurrentPAge(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);


  return (
    <>
      <NavBar />
      <StyledHome>
        <AllCards 
        pokemonsXpage={pokemonsXpage}
        allPokemons={allPokemons}
        paginado={paginado}
        currentPokemons = {currentPokemons}
        />
        <Filters
        allTypes={allTypes}/>
      </StyledHome>
    </>
  );
}
