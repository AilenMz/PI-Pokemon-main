import React from "react";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllPokemons} from '../../Redux/Actions/index.js'
import Card from "../Card/Card.jsx";

export default function AllCards() {

    const allPokemons = useSelector((state) => state.pokemons) // es lo mismo que hacer mapSatetoProps
    const dispatch = useDispatch(); // es lo mismo que hacer mapdispatch to props

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])


  return (
    <div>
      {allPokemons?.map((el) => {
        return (
          <Card
            key={el.id}
            name={el.name}
            img={el.img}
            type= {el.type}
          />
        );
      })}
    </div>
  );
}
