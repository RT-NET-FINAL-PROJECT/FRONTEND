import { WARGAS_FETCH_ALL, WARGAS_FETCH_ID,WARGAS_UPDATE, WARGAS_ADD_RESPONSE, WARGAS_ADD_LOADING, WARGAS_FETCH_LOADING, WARGAS_ERROR } from "../action/actionType"

const defaultState = {
    wargas: [],
    wargaDetail: null,
    loading: true,
    updateStatus: null,
    wargaResponse: null,
    errorMessage: ''
}

function wargasReducer(state = defaultState, action) {
    switch (action.type) {
        case WARGAS_FETCH_ALL:
            return {
                ...state,
                wargas: action.payload
            }
        case WARGAS_FETCH_ID:
            return {
                ...state,
                wargaDetail: action.payload
            }
        case WARGAS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case WARGAS_UPDATE:
            return {
                ...state,
                updateStatus: action.payload
            }
        case WARGAS_ADD_RESPONSE:
            return {
                ...state,
                wargaResponse: action.payload
            }
        case WARGAS_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case WARGAS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default wargasReducer;