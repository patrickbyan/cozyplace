import { combineReducers } from 'redux'

import CartReducer from './CartReducer'

const allReducer = combineReducers({
    carts: CartReducer
})

export default allReducer