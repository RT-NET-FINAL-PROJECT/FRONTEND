import { combineReducers } from "redux";
import postReducer from "./posts";
import userReducer from "./users";

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});
