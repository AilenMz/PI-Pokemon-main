import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./StyledNav";

export default function NavBar() {
  return (
    <StyledNav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon"
      />
      <div className="circulo"/>
      <Link to="/character" className="link">CREAR POKEMON</Link>
    </StyledNav>
  );
}
