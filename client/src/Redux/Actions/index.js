import axios from 'axios'

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_ALL_TYPES = 'GET_ALL_TYPES'
export const SORT_BY_STRENGTH = 'SORT_BY_STRENGTH'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'

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