import styled from "styled-components";
import allColors from "../../colorsPalette/colors";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  border-style: solid;
  border-width: 3px;
  width: 300px;
  margin: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;


  .mainIMG {
    height: 100px;
  }

  &:hover {
    background-color: ${allColors.mainColor};
    box-shadow: 2px 2px 3px 2px black;
  }

  .typeIMG {
    width: 50px;
  }

  .type {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default StyledCard;
