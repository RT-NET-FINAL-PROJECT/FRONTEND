import { REGISTS_FETCH_ALL, REGISTS_FETCH_LOADING, REGISTS_ERROR, REGISTS_PATCH, REGISTS_ADD_LOADING } from "../action/actionType"

const defaultState = {
    regists: [],
    loading: true,
    errorMessage: '',
    updateStatus: null,
}

function registsReducer(state = defaultState, action) {
    switch (action.type) {
        case REGISTS_FETCH_ALL:
            return {
                ...state,
                regists: action.payload
            }
        case REGISTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case REGISTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case REGISTS_PATCH:
            return {
                ...state,
                updateStatus: action.payload
            }
        case REGISTS_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default registsReducer;