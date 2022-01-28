import axios from 'axios'

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_ALL_TYPES = 'GET_ALL_TYPES'
export const SORT_BY_STRENGTH = 'SORT_BY_STRENGTH'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE'
export const SORT_BY_ABC = 'SORT_BY_ABC'
export const GET_POKEMON = 'GET_POKEMON'
export const POST_POKEMON = 'POST_POKEMON'
export const GET_DETAIL = 'GET_DETAIL'


//---------------------------//

export const getAllPokemons = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/pokemons`)
        return dispatch({
            type: GET_ALL_POKEMONS, payload: json.data
        })
    } 
}

// ver como hacer con promesa

// export function getAllPokemons() {
//     return function(dispatch) {
//       return axios(`http://localhost:3001/pokemons`)
//         .then(json => {
//           dispatch({ type: GET_ALL_POKEMONS, payload: json });
//         });
//     };
//   }

export const getAllTypes = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/types`)
        return dispatch({
            type: GET_ALL_TYPES, payload: json.data
        })
    } 
}

export const sortByStrength = (payload) => {
    return {
        type: SORT_BY_STRENGTH,
        payload
    }
}

export const filterByOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

// export const sortByABC = (query) => {
//     return async function (dispatch) {
//         let json = await axios(`http://localhost:3001/orden?orden=${query}`)
//         return dispatch({
//             type: SORT_BY_ABC, payload: json.data
//         })
//     } 
// }
export const sortByABC = (payload) => {
    return {
        type: SORT_BY_ABC,
        payload
    }
}

export const getPokemon = (name) => {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
            type: GET_POKEMON, payload: json.data
        })
        } catch (error) {
            console.log(error)
            return dispatch({
                type: GET_POKEMON, payload: [{msg: `${name} doesn't exists`}]
            })
        } 
    } 
}
export const postPokemon = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/pokemons`, payload)
        console.log(response)
        return response
    } 
}

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: GET_DETAIL, payload: json.data
        })
        } catch (error) {
            console.log(error)
        }
        
    } 
}
    
