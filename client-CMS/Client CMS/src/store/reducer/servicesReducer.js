import { SERVICES_FETCH_ALL, SERVICES_FETCH_LOADING, SERVICES_FETCH_ID, SERVICES_ADD_RESPONSE,SERVICES_UPDATE, SERVICES_ADD_LOADING, SERVICES_ERROR } from "../action/actionType"

const defaultState = {
    services: [],
    serviceDetail: null,
    loading: true,
    updateStatus: null,
    serviceResponse: null,
    errorMessage: ''

}

function servicesReducer(state = defaultState, action) {
    switch (action.type) {
        case SERVICES_FETCH_ALL:
            return {
                ...state,
                services: action.payload
            }
        case SERVICES_FETCH_ID:
            return {
                ...state,
                serviceDetail: action.payload
            }
        case SERVICES_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SERVICES_UPDATE:
            return {
                ...state,
                updateStatus: action.payload
            }
        case SERVICES_ADD_RESPONSE:
            return {
                ...state,
                serviceResponse: action.payload
            }
        case SERVICES_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SERVICES_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default servicesReducer;