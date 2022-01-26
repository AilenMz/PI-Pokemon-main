import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getDetail} from '../../Redux/Actions/index.js'

export default function Detail(props){
   
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props])

    const pokeDetail = useSelector((state) => state.pokemonDetails)


 return(
    <div>
    {
        pokeDetail.length > 0 ?
            <>
                    <h1>Nombre: {pokeDetail[0].name}</h1>
                    <p>ID: {pokeDetail[0].id}</p>
                    <h3>Type</h3>
                    <p>{pokeDetail[0].type ? pokeDetail[0].type.join(' ') : pokeDetail[0].types.map(e => e.name).join(' ') }</p>
                    <h5>HP: {pokeDetail[0].hp}</h5>
                    <h5>ATTACK: {pokeDetail[0].attack}</h5>
                    <h5>DEFENSE: {pokeDetail[0].defense}</h5>
                    <h5>SPEED: {pokeDetail[0].speed}</h5>
                    <h5>Height: {pokeDetail[0].height}</h5>
                    <h5>Weight: {pokeDetail[0].weight}</h5>
                    <img src={pokeDetail[0].img} alt="" />



            </>
        : <p>Loading...</p>
    }
</div>
 )
}

