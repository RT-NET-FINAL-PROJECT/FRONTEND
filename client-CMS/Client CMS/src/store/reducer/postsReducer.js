import { POSTS_FETCH_ALL, POSTS_FETCH_ID, POSTS_UPDATE, POSTS_FETCH_LOADING, POSTS_ADD_LOADING, POSTS_ADD_RESPONSE, POSTS_ERROR } from "../action/actionType"

const defaultState = {
    posts: [],
    postDetail: null,
    loading: true,
    updateStatus: null,
    postResponse: null,
    errorMessage: ''
}

function postsReducer(state = defaultState, action) {
    switch (action.type) {
        case POSTS_FETCH_ALL:
            return {
                ...state,
                posts: action.payload
            }
        case POSTS_FETCH_ID:
            return {
                ...state,
                postDetail: action.payload
            }
        case POSTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case POSTS_UPDATE:
            return {
                ...state,
                updateStatus: action.payload
            }
        case POSTS_ADD_RESPONSE:
            return {
                ...state,
                postResponse: action.payload
            }
        case POSTS_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case POSTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default postsReducer