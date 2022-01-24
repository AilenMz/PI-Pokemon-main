import React from "react";
import { StyledFilter } from "./StyledFilters.jsx";

export default function Filters({allTypes, handleOrigin, handleSortBySTR, handleFilterType, handleSortByABC}) {



  return (
    <StyledFilter>
      <h3>Filters</h3>
      <div className="filters">

        <label>by alphabetical order</label>
        <select onChange={(e) => handleSortByABC(e)}>
        {/* <option selected disabled>alfabetical</option> */}
          <option value="NONE">none</option>
          <option value="ASC">A to Z</option>
          <option value="DESC">Z to A</option>
        </select>

        <label>by strength</label>
        <select onChange={(e) => handleSortBySTR(e)}>
          {/* fuerza */}
          <option value="none">None</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <label>by origin</label>
        <select onChange={(e) => handleOrigin(e)}>
          <option value="all">All</option>
          <option value="pokeapi">Pokeapi</option>
          <option value="database">Database</option>
        </select>
        
        <label>by type</label>
        <select onChange={(e) => handleFilterType(e)}>
          <option value="all">All</option>
          {allTypes?.map((el) => {
            return <option key={el.id} value={el.name}>{el.name}</option>;
          })}
        </select>
      </div>
      <button>Reset</button>
    </StyledFilter>
  );
}
