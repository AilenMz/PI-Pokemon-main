import React from "react";
import StyledCard, {StyledLink, StyleNotFound} from "./StyledCard";
import { Link } from "react-router-dom";
import allTypesIMG from '../../img/types/typesIMG.js'

export default function Card(props) {
  const { name, img, type, attack, id } = props;
  return (
    <>
      {props.msg ? (
        <StyleNotFound>
          <h1>{props.msg}</h1>
          <img src="https://i.pinimg.com/originals/3a/da/78/3ada7822f8739e49ae928b824cf45392.gif" alt="" />
        </StyleNotFound>
      ) : (
        <StyledCard>
          <div className='name'>
          <StyledLink to={`/pokemon/${id}`}>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
          </StyledLink>
          </div>
          <div className="divIMG">
          <img className="mainIMG" src={img} alt="img not found" />
          </div>
          <h4>{`Attack: ${attack}`}</h4>
          <div className="type">
          {type.map((subtype) => {
            return (
            <div>
              <h3 key={subtype}>{subtype.charAt(0).toUpperCase() + subtype.slice(1)}</h3>
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
