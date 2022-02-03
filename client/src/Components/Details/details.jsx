import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../Redux/Actions/index.js";
import StyledDetails from "./StyledDetails.jsx";
import { Link } from "react-router-dom";
import allTypesIMG from "../../img/types/typesIMG.js";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    //return () => dispatch(getDetail("a"));
    return () => dispatch(cleanDetail());
  }, []);

  const pokeDetail = useSelector((state) => state.pokemonDetails);

  return (
    <StyledDetails>
      {pokeDetail.id ? (
        <div className="data">
          <div className="data2">
            <div>
              <Link to="/home">
                <button>Back to Home</button>
              </Link>
            </div>

            <div className="data3">
              <h4>ID: {pokeDetail.id}</h4>
              <h3>TYPE: </h3>
              <div className="types">
                {pokeDetail.type
                  ? pokeDetail.type.map((subtype) => {
                      return (
                        <div>
                          <p key={subtype}>
                            {subtype.charAt(0).toUpperCase() + subtype.slice(1)}
                          </p>
                          <img src={allTypesIMG[subtype]} alt="" />
                        </div>
                      );
                    })
                  : pokeDetail.types.map((subtype) => {
                      return (
                        <div>
                          <p key={subtype.name}>
                            {subtype.name.charAt(0).toUpperCase() +
                              subtype.name.slice(1)}
                          </p>
                          <img src={allTypesIMG[subtype.name]} alt="" />
                        </div>
                      );
                    })}
              </div>
              <h5>HP: {pokeDetail.hp}</h5>
              <h5>ATTACK: {pokeDetail.attack}</h5>
              <h5>DEFENSE: {pokeDetail.defense}</h5>
              <h5>SPEED: {pokeDetail.speed}</h5>
              <h5>HEIGHT: {pokeDetail.height} cm</h5>
              <h5>WEIGHT: {Math.round(pokeDetail.weight)} kg</h5>
            </div>
            <div>
              <h1>
                {pokeDetail.name.charAt(0).toUpperCase() +
                  pokeDetail.name.slice(1)}
              </h1>
            </div>
          </div>

          <img src={pokeDetail.img} alt="" />
        </div>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </StyledDetails>
  );
}
