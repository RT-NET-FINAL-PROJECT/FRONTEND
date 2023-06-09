import { REQUESTS_FETCH_ALL, REQUESTS_FETCH_LOADING, REQUESTS_ERROR, REQUESTS_ADD_LOADING, REQUESTS_PATCH} from "../action/actionType"

const defaultState = {
    requests: [],
    loading: true,
    errorMessage: '',
    updateServiceStatus: null
}

function requestsReducer(state = defaultState, action) {
    switch (action.type) {
        case REQUESTS_FETCH_ALL:
            return {
                ...state,
                requests: action.payload
            }
        case REQUESTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case REQUESTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case REQUESTS_PATCH:
            return {
                ...state,
                updateServiceStatus: action.payload
            }
        case REQUESTS_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default requestsReducer;