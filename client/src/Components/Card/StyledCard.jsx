import styled from "styled-components";

const StyledCard = styled.div`
    border-style: solid;
    border-width: 2px;
    width: 300px;
    margin: 10px;
    cursor: pointer;

    img{
        width: 100px;
    }

    &:hover{
        background-color: brown;
    }
`
export default StyledCard