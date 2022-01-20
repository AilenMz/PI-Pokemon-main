import {applyMiddleware, createStore} from 'redux' // aply permite combinar los middleware, el otro crea un store donde se despachan las acciones
import {composeWithDevTools} from 'redux-devtools-extension' // para poder verlo en el browser
import thunk from 'redux-thunk' // para codigo asincrónico

// import reducer
import rootReducer from '../Reducer/index.js'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store