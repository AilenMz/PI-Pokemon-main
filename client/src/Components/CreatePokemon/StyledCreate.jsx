import styled from "styled-components";
import img from "../../img/createIMG.jpg";
import allColors from "../../colorsPalette/colors";

const StyledCrate = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;

  form {
    position: relative;
    top: 20px;
    left: 900px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    background: linear-gradient(
      0deg,
      rgba(239, 62, 51, 0.7570378493194152) 67%,
      rgba(21, 43, 98, 0.7766456924566701) 100%
    );
    width: 600px;
    height: 500px;
    color: white;
  }
  h1 {
    width: 294px;
    margin-right: 5px;
    visibility: hidden;
  }
  .error {
    color: red;
    font-size: 10px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    .inputIMG {
      width: 400px;
    }

    input {
      width: 200px;
    }
  }
  .barrasContainer {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 10px;
  }
  .tam {
    display: grid;
    grid-template-columns: auto auto;
    margin: 10px;

    h6 {
      margin: 0;
    }
    input {
      width: 50px;
      text-align: center;
      margin-top: 10px;
    }
  }
  .types {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 40px;
    margin: 20px;
    align-items: center;
    justify-content: space-around;

    .type2 {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;

      div {
        background-color: ${allColors.colors[0]};
        border-radius: 5px;
        margin: 10px;
        padding: 7px;
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button {
        width: 17px;
        height: 17px;
        margin: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const StyledRange = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 10px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, 
    ${allColors.colors[1]} 0%, 
    ${allColors.colors[1]} ${(props.value * 100)/(props.max)}%, 
    #fff ${(props.value * 100)/(props.max)}%, 
    #fff 100%);`};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-image: radial-gradient(circle, #f7f7fc 40%, black 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.5);
  }
`;

export default StyledCrate;
