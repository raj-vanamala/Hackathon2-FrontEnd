import { createStore, combineReducers,applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'

import credentials_reducer from '../Reducers/CREDENTIALS_REDUCER'

const reducers = combineReducers({

    credentials_reducer

})

export const store = createStore(reducers,applyMiddleware(thunk));