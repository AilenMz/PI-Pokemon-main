import React from "react";
import { StyledNavPage, StyledButton } from "./StyledPaginado.jsx";

export default function Paginado({
  pokemonsXpage,
  allPokemons,
  paginado,
  setCurrentPAge,
  currentPage,
}) {
  const pageNumber = [];

  let maxPages = Math.ceil(allPokemons / pokemonsXpage);
  for (let i = 0; i < maxPages; i++) {
    pageNumber.push(i + 1);
  }

  return (
    <StyledNavPage currentPage={currentPage}>
      <h2>pages</h2>
      <ul className="paginado">
        <StyledButton
          onClick={() =>
            setCurrentPAge(currentPage === 1 ? currentPage : currentPage - 1)
          }>Prev</StyledButton>
        {pageNumber?.map((number) => (
          <button
            className="B1"
            key={number}
            onClick={() => paginado(number)}
          >
            {number}
          </button>
        ))}
        <StyledButton
          onClick={() =>
            setCurrentPAge(
              currentPage === maxPages ? currentPage : currentPage + 1
            )
          }
        >
          Prev
        </StyledButton>
      </ul>
    </StyledNavPage>
  );
}
