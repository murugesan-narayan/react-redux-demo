import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import pepsiReducer from './pepsi/pepsiReducers'
import userReducer from "./user/userReducers";

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        pepsi: pepsiReducer,
        user: userReducer
    }
)

export default rootReducer