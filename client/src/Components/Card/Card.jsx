import React from 'react'
import StyledCard from './StyledCard'
import {Link} from 'react-router-dom'

export default function Card({name, img, type, attack, id}){
    return (
        <StyledCard>
            <Link to={`/pokemon/${id}`}>
                 <h1>{name}</h1>
            </Link>
           {
               type.map(subtype => {
                   return (<h3 key={subtype}>{subtype}</h3>)
               })
           }
           <img src={img} alt="img not found" />
           <h4>{`Attack: ${attack}`}</h4>
        </StyledCard>
    )
}