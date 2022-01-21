import React from "react";

//components
import Card from "../Card/Card.jsx";
import Paginado from "../paginated/paginado.jsx";
import StyledCards from './StyledCards.jsx'

export default function AllCards({pokemonsXpage, allPokemons, paginado, currentPokemons}) {
  

  return (
    <div>
      <Paginado
        pokemonsXpage={pokemonsXpage}
        allPokemons={allPokemons.length}
        paginado={paginado}
      />
      <StyledCards>
        {currentPokemons?.map((el) => {
          return (
            <Card 
              key={el.id} 
              name={el.name} 
              img={el.img} 
              type={el.type}
              attack={el.attack} />
          );
        })}
      </StyledCards>
    </div>
  );
}
