import styled from 'styled-components'
import img from '../../img/createIMG.jpg'

const StyledCrate = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;

    form{
        position: relative;
        top: 60px;
        left: 500px;
    }
    h1{
        width: 294px;
        margin-right: 5px;
        visibility: hidden;
    }
    .error{
        color: red;
        font-size: 10px;
    }

`
export default StyledCrate