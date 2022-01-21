import React from 'react'
import StyledCard from './StyledCard'

export default function Card({name, img, type, attack}){
    return (
        <StyledCard>
           <h1>{name}</h1>
           {
               type.map(subtype => {
                   return (<h3>{subtype}</h3>)
               })
           }
           <img src={img} alt="img not found" />
           <h4>{`Attack: ${attack}`}</h4>
        </StyledCard>
    )
}