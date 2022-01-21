import React from "react";
import StyledNavPage from "./StyledPaginado.jsx";

export default function Paginado({ pokemonsXpage, allPokemons, paginado }) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsXpage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <StyledNavPage>
      <ul className="paginado">
        {pageNumber?.map((number) => (
          <button onClick={() => paginado(number)}>{number}</button>
        ))}
      </ul>
    </StyledNavPage>
  );
}
