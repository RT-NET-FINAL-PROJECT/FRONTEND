import { combineReducers } from "redux"
import postsReducer from "./postsReducer"
import servicesReducer from "./servicesReducer"
import wargasReducer from "./wargasReducer"
import requestsReducer from "./requestsReducer"



const rootReducer = combineReducers({
    post : postsReducer,
    service: servicesReducer,
    warga: wargasReducer,
    request: requestsReducer
})

export default rootReducer