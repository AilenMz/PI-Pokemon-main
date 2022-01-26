import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledCrate from "./StyledCreate.jsx";
import StyledNav from "../NavBar/StyledNav.jsx";
import { Link,  useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../Redux/Actions/index.js";


function validate(input){
  let errors = {};
  if (!input.name) {
    errors.name = 'A name is required';
  } else if (!/^[a-zA-Z]+$/.test(input.name) || input.name.length>10) {
    errors.name = 'Username is invalid';
  }
  
  if (!input.height) {
    errors.height = 'height is required';
  } else if (input.height>200){
    errors.height = 'height is invalid'
  }

  if (!input.weight) {
    errors.weight = 'height is required';
  } else if (input.weight>1000){
    errors.weight = 'weight is invalid'
  }

  if (!input.img) {
    errors.img = 'an img url is required';
  } else if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(input.img)) {
    errors.img = 'url is invalid'
  }

  return errors;
}

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

  const [errors, setErrors] = useState({})

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

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelect = (e) => {
    setInput({
        ...input,
        //type : [...input.type, e.target.value]
        type : input.type.length < 2 ? [...input.type, e.target.value] : input.type
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

function handleDeleteX(el){
  setInput({
    ...input,
    type : input.type.filter(occ => occ !== el)
  })
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
          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
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
          {errors.height && (
            <p className="error">{errors.height}</p>
          )}
        </div>

        <div>
          <label>weight: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.weight}
            name="weight"
          />
           {errors.weight && (
            <p className="error">{errors.weight}</p>
          )}
        </div>

        <div>
          <label>Image: </label>
          <input
            onChange={handleChange}
            type="text"
            value={input.img}
            name="img"
          />
           {errors.img && (
            <p className="error">{errors.img}</p>
          )}
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
          {/* {errors.type && (
            <p className="error">{errors.type}</p>
          )} */}
          {
              input.type.map(el =>
                <div key={el}>
                  <p>{el}</p>
                  <button type='button' onClick={()=>handleDeleteX(el)}>X</button>
                </div>
                )
            }
        </div>
        <button type='submit' disabled={errors.name || errors.height || errors.weight || errors.img ? true : false}>crear Pokemon</button>
        {
        msg.length > 0 && <p>{msg}</p>
      }
      </form>
      
    </StyledCrate>
  );
}
