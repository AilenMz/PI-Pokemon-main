import {GET_ALL_POKEMONS} from '../Actions/index.js'

const initialState = {
    pokemons: [],
    pokemon: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer