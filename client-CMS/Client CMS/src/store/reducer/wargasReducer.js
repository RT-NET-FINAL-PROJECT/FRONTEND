import { WARGAS_FETCH_ALL, WARGAS_FETCH_LOADING, WARGAS_ERROR } from "../action/actionType"

const defaultState = {
    wargas : [],
    loading: true,
    errorMessage : ''
}

function wargasReducer(state = defaultState, action){
    switch (action.type){
        case WARGAS_FETCH_ALL : 
            return {
                ...state,
                wargas : action.payload.Users
            }
        case WARGAS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case WARGAS_ERROR : 
            return {
                ...state,
                errorMessage : action.payload
            }
        default :
            return state
    }
}

export default wargasReducer;