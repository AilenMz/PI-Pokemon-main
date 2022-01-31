import React from "react";
import StyledCard, {StyledLink} from "./StyledCard";
import { Link } from "react-router-dom";
import allTypesIMG from '../../img/types/typesIMG.js'

export default function Card(props) {
  const { name, img, type, attack, id } = props;
  return (
    <>
      {props.msg ? (
        <div><h1>{props.msg}</h1></div>
      ) : (
        <StyledCard>
          <div className='name'>
          <StyledLink to={`/pokemon/${id}`}>
            <h1>{name}</h1>
          </StyledLink>
          </div>
          <img className="mainIMG" src={img} alt="img not found" />
          <h4>{`Attack: ${attack}`}</h4>
          <div className="type">
          {type.map((subtype) => {
            return (
            <div>
              <h3 key={subtype}>{subtype}</h3>
              <img src={allTypesIMG[subtype]} alt="" className="typeIMG"/>
            </div>
            );
          })}
          </div>
        </StyledCard>
      )}
    </>
  );
}
