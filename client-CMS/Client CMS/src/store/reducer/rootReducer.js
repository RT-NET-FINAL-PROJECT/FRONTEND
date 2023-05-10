import { combineReducers } from "redux"
import postsReducer from "./postsReducer"
import servicesReducer from "./servicesReducer"
import wargasReducer from "./wargasReducer"
import requestsReducer from "./requestsReducer"
import registsReducer from "./registsReducer"



const rootReducer = combineReducers({
    post : postsReducer,
    service: servicesReducer,
    warga: wargasReducer,
    request: requestsReducer,
    regist: registsReducer
})

export default rootReducer