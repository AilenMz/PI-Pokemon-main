import React from "react";
import { StyledFilter } from "./StyledFilters.jsx";
import { Link } from "react-router-dom";


export default function Filters({allTypes, handleReset, handleOrigin, handleSortBySTR, handleFilterType, handleSortByABC}) {



  return (
    <StyledFilter>
      <h3>Filters</h3>
      <div className="filters">

        <label>by alphabetical order</label>
        <select onChange={(e) => handleSortByABC(e)} id="sortABC">
        {/* <option selected disabled>alfabetical</option> */}
          <option value="NONE">None</option>
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
      <button onClick={(e)=>handleReset(e)}>Reset</button>
      <hr />
      <Link to="/pokemon" className="link">CREAR POKEMON</Link>
    </StyledFilter>
  );
}
