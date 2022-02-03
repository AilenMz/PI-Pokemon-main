import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {getAllPokemons, getAllTypes, filterByOrigin, sortByStrength, filterByType, sortByABC} from '../../Redux/Actions/index.js'

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
  const [pokemonsXpage] = useState(12);
  const [orden, setOrden] = useState('')
  //console.log(orden)

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

  const handleOrigin = (e) => {
    e.preventDefault()
    e.target.value === 'all' 
    ? dispatch(getAllPokemons())
    : dispatch(filterByOrigin(e.target.value))
    setCurrentPAge(1)
  }

  const handleSortBySTR = (e) => {
    e.preventDefault()
    e.target.value === 'none' 
    ? dispatch(getAllPokemons()) 
    : dispatch(sortByStrength(e.target.value))
    setCurrentPAge(1)
    setOrden(`Ordenado ${e.target.value}`)
  }

  const handleFilterType = (e) => {
    dispatch(filterByType(e.target.value))
  }

  const handleSortByABC = (e) => {
    e.preventDefault()
    e.target.value === 'NONE' 
    ? dispatch(getAllPokemons())
    : dispatch(sortByABC(e.target.value))
    setCurrentPAge(1)
    setOrden(`Ordenado ${e.target.value}`)
  }

  function handleReset(e){
    e.preventDefault()
    window.location.reload()
    // dispatch(getAllPokemons())
    // let sortABC = document.getElementById('sortABC')
    // sortABC.selectedIndex =0
  }

  return (
    <>
      <NavBar />
      <StyledHome>
        <AllCards 
        pokemonsXpage={pokemonsXpage}
        allPokemons={allPokemons}
        paginado={paginado}
        currentPokemons = {currentPokemons}
        currentPage={currentPage}
        setCurrentPAge={setCurrentPAge}
        />
        <Filters
        allTypes={allTypes}
        handleReset={handleReset}
        handleOrigin={handleOrigin}
        handleSortBySTR={handleSortBySTR}
        handleFilterType={handleFilterType}
        handleSortByABC={handleSortByABC}/>
      </StyledHome>
    </>
  );
}
