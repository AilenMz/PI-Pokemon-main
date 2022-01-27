import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getDetail} from '../../Redux/Actions/index.js'

export default function Detail(props){
   
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id])


    
    const pokeDetail = useSelector((state) => state.pokemonDetails)
    console.log(pokeDetail)


 return(
    <div>
    {
        pokeDetail.id ?
            <>
                    <h1>Nombre: {pokeDetail.name}</h1>
                    <p>ID: {pokeDetail.id}</p>
                    <h3>Type</h3>
                    <p>{pokeDetail.type ? pokeDetail.type.join(' ') : pokeDetail.types.map(e => e.name).join(' ') }</p>
                    <h5>HP: {pokeDetail.hp}</h5>
                    <h5>ATTACK: {pokeDetail.attack}</h5>
                    <h5>DEFENSE: {pokeDetail.defense}</h5>
                    <h5>SPEED: {pokeDetail.speed}</h5>
                    <h5>Height: {pokeDetail.height}</h5>
                    <h5>Weight: {pokeDetail.weight}</h5>
                    <img src={pokeDetail.img} alt="" />



            </>
        : <p>Loading...</p>
    }
</div>
 )
}

