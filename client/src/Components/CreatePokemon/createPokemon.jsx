import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledCrate, { StyledRange } from "./StyledCreate.jsx";
import StyledNav from "../NavBar/StyledNav.jsx";
import { Link, useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../Redux/Actions/index.js";
import { validate } from "./validate";

export default function CreatePokemon() {
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 20,
    defense: 20,
    speed: 20,
    height: 0,
    weight: 0,
    img: "",
    type: [],
  });

  const [errors, setErrors] = useState({});

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setMsg("");
    if (e.target.name === "name" || e.target.name === "img") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: Number(e.target.value),
      });
    }

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      //type: [...input.type, e.target.value],
      type: input.type.length < 2 ? [...input.type, e.target.value] : input.type,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));
    setMsg("Pokemon creado con éxito");
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      img: "",
      type: [],
    });
  };

  function handleDeleteX(el) {
    setInput({
      ...input,
      type: input.type.filter((occ) => occ !== el),
    });
  }

  return (
    <StyledCrate>
      <StyledNav>
        <Link to="/home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon"
          />
        </Link>
        <div className="circulo" />
        <h1>CREA TU POKEMON</h1>
      </StyledNav>
      <form onSubmit={handleSubmit}>
        <h2>CREATE YOUR POKEMON</h2>

        <div className="inputs">
          <div>
            <h3>Name: </h3>
            <input
              onChange={handleChange}
              type="text"
              value={input.name}
              name="name"
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="barrasContainer">
          <div>
            <label>Life: </label>
            <label>
              <StyledRange
                onChange={handleChange}
                type="range"
                value={input.hp}
                name="hp"
                className="barra"
                min={0}
                max={100}
              />
              {input.hp}
            </label>
          </div>

          <div>
            <label>Strength: </label>
            <label>
              <StyledRange
                onChange={handleChange}
                type="range"
                value={input.attack}
                name="attack"
                min={20}
                max={200}
              />{" "}
              {input.attack}
            </label>
          </div>

          <div>
            <label>Defense: </label>
            <label>
              <StyledRange
                onChange={handleChange}
                type="range"
                value={input.defense}
                name="defense"
                min={20}
                max={150}
              />{" "}
              {input.defense}
            </label>
          </div>

          <div>
            <label>Speed: </label>
            <label>
              <StyledRange
                onChange={handleChange}
                type="range"
                value={input.speed}
                name="speed"
                min={20}
                max={150}
              />{" "}
              {input.speed}
            </label>
          </div>
        </div>

        <div className="tam">
          <div className="tam2">
            <label>Height: </label>
            <h6>*cm - max 200cm</h6>
            <input
              onChange={handleChange}
              type="text"
              value={input.height}
              name="height"
            />
            {errors.height && <p className="error">{errors.height}</p>}
          </div>

          <div className="tam2">
            <label>weight: </label>
            <h6>*kg - max 2000kg</h6>
            <input
              onChange={handleChange}
              type="text"
              value={input.weight}
              name="weight"
            />
            {errors.weight && <p className="error">{errors.weight}</p>}
          </div>
        </div>

        <div className="inputs">
          <label>Image: </label>
          <input
            className="inputIMG"
            onChange={handleChange}
            type="text"
            value={input.img}
            name="img"
          />
          {errors.img && <p className="error">{errors.img}</p>}
        </div>

        <div className="types">
          <div className="type1">
            <label>Tipo: </label>
            <select onChange={handleSelect} className="selectType">
              {allTypes?.map((el) => (
                <option value={el.name} key={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="type2">
            {input.type.map((el) => (
              <div key={el}>
                <button type="button" onClick={() => handleDeleteX(el)}>
                  X
                </button>
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="finalButton"
          type="submit"
          disabled={
            !input.name || errors.name || errors.height || errors.weight || errors.img
              ? true
              : false
          }> Create Pokemon
        </button>
        {msg.length > 0 && (
          <div className="mensaje">
            <p>{msg}</p>
            <Link to="/home">Volver al Home</Link>
          </div>
        )}
      </form>
    </StyledCrate>
  );
}
