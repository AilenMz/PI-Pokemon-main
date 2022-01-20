import React from "react";
import { Link } from "react-router-dom";
import StyledDiv from "./styledLanding.jsx";

const LangindPage = () => {
  return (
    <StyledDiv>
      <div className="container">
        <h1>Bienvenidos a la App de</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
        </div>
        <Link to="/home">
          <button>Ingresar al Home</button>
        </Link>
      
    </StyledDiv>
  );
};

export default LangindPage;
