import { POSTS_FETCH_ALL, POSTS_FETCH_LOADING, POSTS_ERROR } from "../action/actionType"

const defaultState = {
    posts : [],
    loading: true,
    errorMessage : ''
}

function postsReducer(state = defaultState, action){
    switch (action.type){
        case POSTS_FETCH_ALL : 
            return {
                ...state,
                posts : action.payload
            }
        case POSTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case POSTS_ERROR : 
            return {
                ...state,
                errorMessage : action.payload
            }
        default :
            return state
    }
}

export default postsReducer