import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import pepsiReducer from './pepsi/pepsiReducers'

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        pepsi: pepsiReducer
    }
)

export default rootReducer