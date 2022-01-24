import styled from "styled-components";
import allColors from '../../colorsPalette/colors.js'

export const StyledFilter = styled.div`
    width: auto;
    max-height: 400px;
    margin-top: 70px;
    background-color: ${allColors.colors[0]};
    padding: 30px;
    border-radius: 10px;
    color: white;
    font-size: 25px;
    
    .filters{
        display: flex;
        flex-direction: column;
        color: ${allColors.colors[2]};
        font-size: 13px;
        
        select {
            margin-bottom: 10px;
            margin-top: 2px;
            padding: 6px 10px;
            color: #333333;
            background-color: #eeeeee;
            border: 1px solid #dddddd;
            cursor:pointer;
            border-radius: 5px;
        }
    }
`