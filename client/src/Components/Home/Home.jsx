import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import StyledFilter from './StyledHome'
    


export default function Home() {


    return (
        <>
           <NavBar/>
           <StyledFilter>
           <button>Volver a cargar todos los Pokemons</button>
           <div>
               <select>
                    {/* orden alfabetico */}
                    <option value='asc'>ASC</option>
                    <option value='desc' >DESC</option>
               </select>
               <select>
                    {/* fuerza */}
                    <option value='asc'>ASC</option>
                    <option value='desc' >DESC</option>
               </select>
               <select>
                    {/* hacer un map por tipo de PK */}
                    <option value='all'>All</option>
                    <option value='alive'>Alive</option>
                    <option value='seceased' >Deceased</option>
                    <option value='presumed dead'>Presumed dead</option>
                    <option value='unknown' >Unknown</option>
               </select>
               <select>
                    <option value='all'>All</option>
                    <option value='pokeapi'>Pokeapi</option>
                    <option value='database' >Database</option>
               </select>
            </div>
           </StyledFilter>
        </>
    )
 // min 46
}
 