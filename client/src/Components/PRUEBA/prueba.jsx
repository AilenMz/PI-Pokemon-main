import React from "react";

//---------------------
import NavBar from "../NavBar/NavBar.jsx";
import {StyledHome} from "./StyledHome";
import AllCards from '../Cards/allCards.jsx';
import Filters from "../Filters/filters.jsx";


export default function Prueba() {

  

  return (
    <>
      <NavBar />
      <StyledHome>
      <Filters/>
      <AllCards/>
      </StyledHome>
    </>
  );
}