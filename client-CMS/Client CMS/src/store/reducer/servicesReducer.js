import { SERVICES_FETCH_ALL, SERVICES_FETCH_LOADING, SERVICES_ERROR } from "../action/actionType"

const defaultState = {
    services : [],
    loading: true,
    errorMessage : ''
}

function servicesReducer(state = defaultState, action){
    switch (action.type){
        case SERVICES_FETCH_ALL : 
            return {
                ...state,
                services : action.payload
            }
        case SERVICES_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SERVICES_ERROR : 
            return {
                ...state,
                errorMessage : action.payload
            }
        default :
            return state
    }
}

export default servicesReducer;