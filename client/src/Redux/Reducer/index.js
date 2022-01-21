import {GET_ALL_POKEMONS, GET_ALL_TYPES, SORT_BY_STRENGTH} from '../Actions/index.js'

const initialState = {
    pokemons: [],
    types:[],
    pokemon: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SORT_BY_STRENGTH:
            let sortSTR = action.payload === 'asc' ? 
                state.pokemons.sort((a, b) => a.attack - b.attack) 
                : state.pokemons.sort((a, b) => b.attack -a.attack)
            return {
                ...state,
                pokemons: sortSTR
            }
        default:
            return state;
    }
}

export default rootReducer