import { combineReducers } from "redux";
import postReducer from "./posts";
import userReducer from "./users";
import rtReducer from "./rts";
import serviceReducer from "./services";

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  rts: rtReducer,
  services: serviceReducer,
});
