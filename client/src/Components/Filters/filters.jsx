import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getAllTypes} from "../../Redux/Actions/index.js";
import { StyledFilter } from "./StyledFilters.jsx";

export default function Filters() {


  
  const allTypes = useSelector((state) => state.types); // es lo mismo que hacer mapSatetoProps
  const dispatch = useDispatch(); // es lo mismo que hacer mapdispatch to props

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);



  return (
    <StyledFilter>
      <button>Volver a cargar todos los Pokemons</button>
      <div className="filters">

        <label>alfabetico</label>
        <select>
          {/* orden alfabetico */}
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>

        <label>fuerza</label>
        <select>
          {/* fuerza */}
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <label>origen</label>
        <select>
          <option value="all">All</option>
          <option value="pokeapi">Pokeapi</option>
          <option value="database">Database</option>
        </select>
        
        <label>tipo</label>
        <select>
          <option value="All">All</option>
          {allTypes?.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
      </div>
    </StyledFilter>
  );
}
