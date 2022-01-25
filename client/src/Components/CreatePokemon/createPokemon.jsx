import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledCrate from "./StyledCreate.jsx";
import StyledNav from "../NavBar/StyledNav.jsx";
import { Link,  useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../Redux/Actions/index.js";

export default function CreatePokemon() {
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    img: '',
    type: [],
  });

  const [msg, setMsg] = useState('')

  const handleChange = (e) => {
    setMsg('')
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
  };

  const handleSelect = (e) => {
    setInput({
        ...input,
        type : [...input.type, e.target.value]
    })
}

const handleSubmit = (e) =>{
  e.preventDefault()
  dispatch(postPokemon(input))
  setMsg('Pokemon creado con éxito')
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
  })
  // history.push('/home')
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
        <div>
          <label>nombre: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.name}
            name="name"
          />
        </div>
        <div>
          <label>Vida: </label>
          <label>
            <input
              onChange={handleChange}
              type="range"
              value={input.hp}
              name="hp"
            />{" "}
            {input.hp}
          </label>
        </div>
        <div>
          <label>Fuerza: </label>
          <label>
            <input
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
          <label>defense: </label>
          <label>
            <input
              onChange={handleChange}
              type="range"
              value={input.defense}
              name="defense"
              min={30}
              max={100}
            />{" "}
            {input.defense}
          </label>
        </div>
        <div>
          <label>speed: </label>
          <label>
            <input
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
        <div>
          <label>height: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.height}
            name="height"
          />
        </div>
        <div>
          <label>weight: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.weight}
            name="weight"
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.img}
            name="img"
          />
        </div>
        <div>
            <label>Tipo: </label>
          <select onChange={handleSelect}>
              <option value="dis" disabled>Type</option>
            {allTypes?.map((el) => (
              <option value={el.name} key={el.name}>
                {el.name}
              </option>
            ))}
          </select>
          <ul><li>{input.type.map(el => el + ', ')}</li></ul> 
        </div>
        <button type='submit'>crear Pokemon</button>
        {
        msg.length > 0 && <p>{msg}</p>
      }
      </form>
      
    </StyledCrate>
  );
}
