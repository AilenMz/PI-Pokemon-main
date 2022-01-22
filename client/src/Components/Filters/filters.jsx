import React from "react";
import { StyledFilter } from "./StyledFilters.jsx";

export default function Filters({allTypes, handleOrigin, handleSortBySTR, handleFilterType, handleSortByABC}) {



  return (
    <StyledFilter>
      <button>Volver a cargar todos los Pokemons</button>
      <div className="filters">

        <label>alfabetico</label>
        <select onChange={(e) => handleSortByABC(e)}>
          {/* orden alfabetico */}
          <option value="NONE">none</option>
          <option value="ASC">A to Z</option>
          <option value="DESC">Z to A</option>
        </select>

        <label>fuerza</label>
        <select onChange={(e) => handleSortBySTR(e)}>
          {/* fuerza */}
          <option value="none">None</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <label>origen</label>
        <select onChange={(e) => handleOrigin(e)}>
          <option value="all">All</option>
          <option value="pokeapi">Pokeapi</option>
          <option value="database">Database</option>
        </select>
        
        <label>tipo</label>
        <select onChange={(e) => handleFilterType(e)}>
          <option value="all">All</option>
          {allTypes?.map((el) => {
            return <option key={el.id} value={el.name}>{el.name}</option>;
          })}
        </select>
      </div>
    </StyledFilter>
  );
}
