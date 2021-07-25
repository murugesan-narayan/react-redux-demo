import { BUY_PEPSI } from "./pepsiTypes"

const initialState = {
    numberOfPepsis: 15
}

const pepsiReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PEPSI: 
            return {...state, numberOfPepsis: state.numberOfPepsis - 1}
        default: return state
    }
}

export default pepsiReducer